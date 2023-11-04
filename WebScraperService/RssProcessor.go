package main

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"time"
)

// This program uses the xml package to parse the RSS feed and extract the relevant data. A struct Rss is defined to match the format of the RSS feed.
// The xml:"tagname" annotation is used to match the struct fields with the corresponding tags in the RSS feed.
// The program makes an HTTP GET request to the specified RSS feed URL, and the response is decoded into the Rss struct using the xml.NewDecoder(res.Body).Decode(&rss) function.
// Then the program loops through the items in the RSS feed and extracts the title, link, description and pubDate. The Format function is used to format the date as desired.

type Rss struct {
	Channel struct {
		Item []struct {
			Title       string `xml:"title"`
			Link        string `xml:"link"`
			Description string `xml:"description"`
			PubDate     string `xml:"pubDate"`
		} `xml:"item"`
	} `xml:"channel"`
}

type Source struct {
	Data []struct {
		ID         int `json:"id"`
		Attributes struct {
			Name        string    `json:"name"`
			CreatedAt   time.Time `json:"createdAt"`
			UpdatedAt   time.Time `json:"updatedAt"`
			PublishedAt time.Time `json:"publishedAt"`
			URL         string    `json:"url"`
			Active      bool      `json:"active"`
			Logo        string    `json:"logo"`
			DisplayName string    `json:"display_name"`
			Category    string    `json:"category"`
			Id          int       `json:"id"`
			IsDefImg    bool      `json:"isdefaultimage"`
		} `json:"attributes"`
	} `json:"data"`
	Meta struct {
		Pagination struct {
			Page      int `json:"page"`
			PageSize  int `json:"pageSize"`
			PageCount int `json:"pageCount"`
			Total     int `json:"total"`
		} `json:"pagination"`
	} `json:"meta"`
}

type Article struct {
	Data Data `json:"data"`
}

type Data struct {
	Title    string    `json:"title"`
	Category string    `json:"category"`
	Image    string    `json:"image"`
	Link     string    `json:"link"`
	PubDate  time.Time `json:"pubDate"`
	Source   string    `json:"source"`
}

func doProcess() {

	result := getRssListFromDb()

	for _, rec := range result.Data {

		url := rec.Attributes.URL
		source := rec.Attributes.Name
		category := rec.Attributes.Category
		defimg := rec.Attributes.IsDefImg

		//get articles
		rss := processRss(url)

		//insert into db
		postArticles(rss, source, category, defimg)
	}

}

// for testing purposes
func doProcessSingle() {

	url := "https://rsshub.app/apnews/topics/apf-topnews" //rss source to test
	source := getSourceId("ap-headlines")
	category := "headlines"
	defimg := false

	//get articles
	rss := processRss(url)

	//insert into db
	postArticles(rss, source, category, defimg)

}

func processRss(url string) Rss {
	res, err := http.Get(url)

	if err != nil {
		// panic(err)
		fmt.Println("err: ", err)
	}
	defer res.Body.Close()

	if res.StatusCode != 200 {
		fmt.Println("Error: status code", res.StatusCode)
		return Rss{}
	}

	var rss Rss
	err = xml.NewDecoder(res.Body).Decode(&rss)
	if err != nil {
		// panic(err)
		fmt.Println("err: ", err)
	}

	return rss
}

func getRssListFromDb() Source {

	res, err := http.Get("http://localhost:1337/api/news-sources?filters[active][$eq]=true&publicationState=live&pagination[page]=1&pagination[pageSize]=9999")
	if err != nil {
		fmt.Printf("The HTTP request failed with error %s\n", err)
	} else {
		defer res.Body.Close()
		data, _ := io.ReadAll(res.Body)

		var result Source
		if err := json.Unmarshal(data, &result); err != nil { // Parse []byte to the go struct pointer
			fmt.Println("Can not unmarshal JSON")
		}

		return result
	}
	return Source{}
}

func postArticles(rss Rss, source string, category string, defimg bool) {

	for _, item := range rss.Channel.Item {

		image := WebScraper(item.Link)
		if defimg {
			image = ""
		}
		// fmt.Println("image:", image)
		// fmt.Println("title:", item.Title)
		// fmt.Println("category:", getCategoryId(category))
		// fmt.Println("source:", source)
		// fmt.Println("pubDate:", item.PubDate) //Thu, 26 Oct 2023 14:14:08 GMT
		// fmt.Println("link:", item.Link)

		article := Article{
			Data: Data{
				Title:    item.Title,
				Category: getCategoryId(category),
				Image:    image,
				Link:     item.Link,
				PubDate:  convertStringToDate(item.PubDate),
				Source:   getSourceId(source),
			},
		}
		postRest, _ := json.Marshal(article)

		responseBody := bytes.NewBuffer(postRest)
		resp, error := http.Post("http://localhost:1337/api/articles", "application/json", responseBody)

		//Handle Error
		if error != nil {
			fmt.Println("An Error Occurred ", error)
			continue
		}
		defer resp.Body.Close()
		//Read the response body
		body, error := ioutil.ReadAll(resp.Body)
		if error != nil {
			fmt.Println(error)
			continue
		}
		fmt.Println(string(body))
	}
}

func postTest() {
	article := Article{
		Data: Data{
			Title:    "Has Israel invaded Gaza? The military has been vague, even if its objectives are clear",
			Category: getCategoryId("headlines"),
			Image:    "https://assets.apnews.com/fa/ba/9258a7114f5ba5c7202aaa1bdd66/aplogo.svg",
			Link:     "https://apnews.com/article/israel-gaza-ground-operation-invasion-6ba5bf06f81c315252a9e53735f3de47",
			PubDate:  convertStringToDate("Thu, 02 Nov 2023 01:11:19 GMT"),
			Source:   "1",
		},
	}
	postRest, _ := json.Marshal(article)

	responseBody := bytes.NewBuffer(postRest)
	resp, error := http.Post("http://localhost:1337/api/articles", "application/json", responseBody)

	//Handle Error
	if error != nil {
		fmt.Println("An Error Occurred ", error)
	}
	defer resp.Body.Close()
	//Read the response body
	body, error := ioutil.ReadAll(resp.Body)
	if error != nil {
		fmt.Println(error)
	}
	fmt.Println(string(body))
}
