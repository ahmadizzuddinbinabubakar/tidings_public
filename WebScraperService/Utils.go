package main

import (
	"fmt"
	"time"
)

func getCategoryId(category string) string {
	if category == "headlines" {
		return "1"
	} else if category == "world" {
		return "2"
	} else if category == "lifestyle" {
		return "3"
	} else if category == "science" {
		return "4"
	} else if category == "technology" {
		return "5"
	} else if category == "business" {
		return "6"
	} else if category == "sports" {
		return "7"
	} else if category == "culture" {
		return "8"
	}

	return ""
}

func convertStringToDate(rfc2822Date string) time.Time {
	// Parse the RFC 2822 date
	parsedTime, err := time.Parse(time.RFC1123, rfc2822Date)
	if err != nil {
		return time.Time{}
	}

	// Format the parsed time in ISO 8601 format
	iso8601DateStr := parsedTime.Format(time.RFC3339)
	// fmt.Println(iso8601DateStr)

	// Parse the date string into a time.Time value
	iso8601Date, err := time.Parse(time.RFC3339, iso8601DateStr)
	if err != nil {
		fmt.Println("Error parsing date:", err)
		return time.Time{}
	}

	return iso8601Date
}

func getSourceId(source string) string {
	if source == "ap-headlines" {
		return "1"
	} else if source == "reuters-headlines" {
		return "2"
	} else if source == "bbc-headlines" {
		return "3"
	} else if source == "wsj-world" {
		return "4"
	} else if source == "reuters-politics" {
		return "5"
	} else if source == "reuters-world" {
		return "6"
	} else if source == "ap-world" {
		return "7"
	} else if source == "bbc-world" {
		return "8"
	} else if source == "bbc-politics" {
		return "9"
	} else if source == "wsj-business" {
		return "10"
	} else if source == "reuters-business" {
		return "11"
	} else if source == "bbc-business" {
		return "12"
	} else if source == "ft-markets" {
		return "13"
	} else if source == "ft-global-economy" {
		return "14"
	} else if source == "ft-financials" {
		return "15"
	} else if source == "ft-emerging-markets" {
		return "16"
	} else if source == "theeconomist-finance-economics" {
		return "17"
	} else if source == "theeconomist-business" {
		return "18"
	} else if source == "bloomberg-markets" {
		return "19"
	} else if source == "cnbc-business" {
		return "20"
	} else if source == "cnbc-economy" {
		return "21"
	} else if source == "cnbc-small-business" {
		return "22"
	} else if source == "cnbc-finance" {
		return "23"
	} else if source == "wsj-technology" {
		return "24"
	} else if source == "reuters-technology" {
		return "25"
	} else if source == "bbc-technology" {
		return "26"
	} else if source == "theverge" {
		return "27"
	} else if source == "engadget" {
		return "28"
	} else if source == "cnet-popular-products" {
		return "29"
	} else if source == "cnet-gaming" {
		return "30"
	} else if source == "gizmodo" {
		return "31"
	} else if source == "techradar" {
		return "32"
	} else if source == "hackernews" {
		return "33"
	} else if source == "techcrunch" {
		return "34"
	} else if source == "wired" {
		return "35"
	} else if source == "readwrite" {
		return "36"
	} else if source == "macworld" {
		return "37"
	} else if source == "arstechnica" {
		return "38"
	} else if source == "techmeme" {
		return "39"
	} else if source == "thenextweb" {
		return "40"
	} else if source == "computerworld" {
		return "41"
	} else if source == "reuters-environment" {
		return "42"
	} else if source == "reuters-health" {
		return "43"
	} else if source == "bbc-health" {
		return "44"
	} else if source == "bbc-science-environment" {
		return "45"
	} else if source == "nature" {
		return "46"
	} else if source == "science" {
		return "47"
	} else if source == "bigthink" {
		return "48"
	} else if source == "livescience" {
		return "49"
	} else if source == "quantamagazine" {
		return "50"
	} else if source == "newscientist" {
		return "51"
	} else if source == "smithsonian-science-nature" {
		return "52"
	} else if source == "reuters-sports" {
		return "53"
	} else if source == "espn" {
		return "54"
	} else if source == "deadspin" {
		return "55"
	} else if source == "bbc-sports" {
		return "56"
	} else if source == "bbc-sports-uk" {
		return "57"
	} else if source == "theguardian-sports" {
		return "58"
	} else if source == "sportsillustrated" {
		return "59"
	} else if source == "yahoo-sports" {
		return "60"
	} else if source == "90min" {
		return "61"
	} else if source == "fourfourtwo" {
		return "62"
	} else if source == "caughtoffside" {
		return "63"
	} else if source == "thesefootballtimes" {
		return "64"
	} else if source == "marca" {
		return "65"
	} else if source == "golf" {
		return "66"
	} else if source == "atptour" {
		return "67"
	} else if source == "slamonline" {
		return "68"
	} else if source == "crickettimes" {
		return "69"
	} else if source == "boxingnews24" {
		return "70"
	} else if source == "mmafighting" {
		return "71"
	} else if source == "bwfbadminton" {
		return "72"
	} else if source == "athleticsweekly" {
		return "73"
	} else if source == "motorsport" {
		return "74"
	} else if source == "esportinsider" {
		return "75"
	} else if source == "esportjunkie" {
		return "76"
	} else if source == "afkgaming" {
		return "77"
	} else if source == "wsj-lifestyle" {
		return "78"
	} else if source == "soranews24" {
		return "79"
	} else if source == "cnet-howto" {
		return "80"
	} else if source == "hackaday" {
		return "81"
	} else if source == "lifehacker" {
		return "82"
	} else if source == "makeuseof" {
		return "83"
	} else if source == "lifehack" {
		return "84"
	} else if source == "atlassian-productivity" {
		return "85"
	} else if source == "monday-productivity" {
		return "86"
	} else if source == "reuters-entertainment" {
		return "87"
	} else if source == "bbc-entertainment-arts" {
		return "88"
	} else if source == "economist-books-arts" {
		return "89"
	} else if source == "smithsonianmag-arts-culture" {
		return "90"
	} else if source == "eurozine" {
		return "91"
	} else if source == "bbc-culture" {
		return "92"
	} else if source == "france24" {
		return "93"
	} else if source == "ourculturemag" {
		return "94"
	} else if source == "gq" {
		return "95"
	} else if source == "trendland" {
		return "96"
	} else if source == "popculturebrain" {
		return "97"
	} else if source == "theguardian-culture" {
		return "98"
	} else if source == "screenrant" {
		return "99"
	} else if source == "rogerebert" {
		return "100"
	} else if source == "movieweb" {
		return "101"
	} else if source == "filmfestivals" {
		return "102"
	} else if source == "cinemablend" {
		return "103"
	} else if source == "hollywoodreporter" {
		return "104"
	} else if source == "screencrush" {
		return "105"
	} else if source == "collider" {
		return "106"
	} else if source == "filmschoolrejects" {
		return "107"
	} else if source == "allmovie" {
		return "108"
	} else if source == "filmthreat" {
		return "109"
	} else if source == "tvfanatic" {
		return "110"
	} else if source == "tvline" {
		return "111"
	} else if source == "tvinsider" {
		return "112"
	} else if source == "avclub" {
		return "113"
	} else if source == "billboard" {
		return "114"
	} else if source == "loudwire" {
		return "115"
	} else if source == "youredm" {
		return "116"
	} else if source == "hiphopdx" {
		return "117"
	} else if source == "ultimateclassicrock" {
		return "118"
	} else if source == "nme" {
		return "119"
	} else if source == "xxlmag" {
		return "120"
	} else if source == "metalunderground" {
		return "121"
	} else if source == "blabbermouth" {
		return "122"
	} else if source == "louderthanwar" {
		return "123"
	} else if source == "noisecreep" {
		return "124"
	} else if source == "avantmusicnews" {
		return "125"
	} else if source == "altpress" {
		return "126"
	} else if source == "indiecentralmusic" {
		return "127"
	} else if source == "jrocknews" {
		return "128"
	} else if source == "nichemusic" {
		return "129"
	} else if source == "japanmusiccorner" {
		return "130"
	} else if source == "animenewsnetwork" {
		return "131"
	} else if source == "honeysanime" {
		return "132"
	} else if source == "myanimelist" {
		return "133"
	} else if source == "otakumode" {
		return "134"
	} else if source == "animeuknews" {
		return "135"
	} else if source == "otakunews" {
		return "136"
	} else if source == "anitrendz" {
		return "137"
	} else if source == "theparisreview" {
		return "138"
	} else if source == "worldliteraturetoday" {
		return "139"
	} else if source == "mcsweeneys" {
		return "140"
	} else if source == "lithub" {
		return "141"
	} else if source == "newyorker" {
		return "142"
	} else if source == "standford-books" {
		return "143"
	} else if source == "britishcouncil-literature" {
		return "144"
	} else if source == "bookriot" {
		return "145"
	} else if source == "lareviewofbooks" {
		return "146"
	} else if source == "interestingliterature" {
		return "147"
	} else if source == "complete-review" {
		return "148"
	} else if source == "booooooom" {
		return "149"
	} else if source == "thisiscolossal" {
		return "150"
	} else if source == "designyoutrust" {
		return "151"
	} else if source == "artforum" {
		return "152"
	} else if source == "hyperallergic" {
		return "153"
	} else if source == "aatonau" {
		return "154"
	} else if source == "streetartnews" {
		return "155"
	} else if source == "artnews" {
		return "156"
	} else if source == "moussemagazine" {
		return "157"
	}

	return ""
}
