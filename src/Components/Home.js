import React, {
	Component
} from "react";
import {
	ReactiveBase,
	DataSearch,
	RangeSlider,
	DateRange,
	MultiList,
	SelectedFilters,
	ResultCard
} from "@appbaseio/reactivesearch";
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: "All"
		};
	}
	changeRadioValue = (value) => {
		this.setState({
			filter: value
		})
	}
	OpenDetail = (title) => {
		window.location.href = `/musicItem/${title}`;
	}
	render() {
		const {
			filter
		} = this.state;
		const dataField = filter === "all" ? ["title", "artist"] : filter;
		const checkboxKey = ["all", "title", "artist"];
		return (
			  < div className = "main-container" >

				< ReactiveBase app = "MyMusic"
	 			credentials = "X7sZ3NQDt:ad866f29-f84d-4f5a-992a-8a5b9de85732"
			//url = "https://scalr.api.appbase.io"
      //<ReactiveBase app='bands' type='_doc' url='https://amp.a-magdy.me'>
			theme = {
				{
					typography: {
						fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
						fontSize: "16px"
					},
					colors: {
						textColor: "#fff",
						backgroundColor: "#212121",
						primaryTextColor: "#fff",
						primaryColor: "#2196F3",
						titleColor: "#fff",
						alertColor: "#d9534f",
						borderColor: "#666"
					}
				}
			} > < div className = "navbar" >

       < div className = "search-container" > < DataSearch autosuggest = {
				true
			}
			componentId = "search"
			dataField = {
				['title', 'title.autosuggest', 'title.keyword']
			}
			fieldWeights = {
				[
					2,
					1,
					2
				]
			}
			highlightField = {
				['title']
			}
			queryFormat = "and"
			size = "1000"
			style = {
				{
					marginBottom: 20
				}
			}
			/> < /div> < /div> < div className = "sub-container" > < div className = {
				this.state.isClicked ? "left-bar-optional" : "left-bar"
			} > < hr className = "blue" / > < div className = "filter-heading center" > < b > < i className = "fa fa-star" / > Year < /b> < /div> < RangeSlider componentId = "yearfilter"
			dataField = "year"
			title = "Year"
			filterLabel = "Year"
			showHistogram = {
				true
			}
			range = {
				{
					start: 1945,
					end: 2018
				}
			}
			rangeLabels = {
				{
					start: "1945",
					end: "2018"
				}
			}
			interval = {
				1
			}
			react = {
				{
					and: ["searchbox"]
				}
			}
			style = {
				{
					padding: "20px",
					border: "20px",
					marginTop: "20px",
					background: "gray"
				}
			}
			/> < hr className = "blue" / > < div className = "filter-heading center" > < b > {
				" "
			} < i className = "fa fa-language" / > Languages {
				" "
			} < /b> < /div> < MultiList componentId = "list-2"
			dataField = "language.keyword"
			size = {
				6000
			}
			style = {
				{
					marginBottom: 20
				}
			}
			title = "languge" / > < hr className = "blue" / > < div className = "filter-heading center" > < b > {
				" "
			} < i className = "fa fa-calendar" / > Release Date {
				" "
			} < /b> < /div> < DateRange componentId = "date-filter"
			dataField = "release_date"
			className = "datePicker" / > < /div> < div className = {
				this.state.isClicked ? "result-container-optional" : "result-container"
			} > < SelectedFilters showClearAll = {
				true
			}
			clearAllLabel = "Clear filters" / > < div className = "result-item" > < ResultCard componentId = "result"
			dataField = "titles"
			title = "Results"
			from = {
				0
			}
			size = {
				10
			}
			pagination = {
				true
			}
			pages = {
				10
			}
			react = {
				{
					and: ["Search", "yearfilter", "title"]
				}
			}
			pagination = {
				true
			}
			className = "Result_card"
			paginationAt = "bottom"
			pages = {
				4
			}
			size = {
				12
			}
			Loader = "Loading..."
			noResults = "No results were found..."
			onData = {
				res => {
					console.log(res);
					return {
						image: "https://i.ytimg.com/vi/L7m61Em4A5k/maxresdefault.jpg",
						title: "Song Title: " + res.title,
						description: ( < div > < p > {
							"Description: " + res.artist + " " + "★".repeat(res.location)
						} < /p> < p > {
							"Pub Year: " + res.year
						} < /p> < /div>),
						containerProps: {
							onClick: () => this.OpenDetail(res.title)
						}
					};
				}
			}
			/> < /div> < /div> < /div> < /ReactiveBase> < /div>
	 );

	}
}
export default Home;
