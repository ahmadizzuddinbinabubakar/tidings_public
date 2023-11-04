package main

import (
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strings"

	"github.com/PuerkitoBio/goquery"
	textsummary "github.com/arjunmahishi/text-summary"
)

//todo: clean is not perfect
//todo: summariser is not working

func WebScraper(url string) string /*, string*/ {
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	if res.StatusCode != 200 {
		fmt.Println("Error: status code", res.StatusCode)
		return ""
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	if err != nil {
		log.Fatal(err)
	}

	image, tmp := doc.Find("img").Attr("src")
	if !tmp {
		image = ""
	}

	return image //, summary
}

func cleanArticleContent(articleContent string) string {
	// Remove links
	linkRegex := regexp.MustCompile(`<a\b[^>]*>(.*?)</a>`)
	articleContent = linkRegex.ReplaceAllString(articleContent, "")

	// Remove special characters and extra spaces
	specialCharsRegex := regexp.MustCompile(`[^a-zA-Z0-9\s]+`)
	articleContent = specialCharsRegex.ReplaceAllString(articleContent, " ")
	articleContent = strings.TrimSpace(articleContent)

	// Remove consecutive spaces
	spacesRegex := regexp.MustCompile(`\s+`)
	articleContent = spacesRegex.ReplaceAllString(articleContent, " ")

	return articleContent
}

func summarizeArticleContent(articleContent string) (string, error) {

	summarizer := textsummary.CreateSummarizer()
	summary := summarizer.Summary(articleContent, 3) // Gives a n line summary

	return summary, nil
}
