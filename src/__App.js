import React, { Component } from "react";
import "./App.css";
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  MultiDataList,
  MultiList,
  RangeSlider,
  ResultCard,
  DateRange,
  SelectedFilters
} from "@appbaseio/reactivesearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
  }
  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Music"
    });
  }

  render() {
    return (
      //<div className="app-container">
      <ReactiveBase
        app="bands"
        type="_doc"
        url="https://amp.a-magdy.me"
        theme={{
          typography: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
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
        }}
      >
        <div className="navbar">
          <div className="logo-container">
            <img
              className="app-logo"
              src="image/music.png"
              alt="African Music Archive"
            />
          </div>
          <div className="search-container">
            <CategorySearch
              componentId="searchbox"
              dataField={["title", "artist"]}
              categoryField="title.raw"
              placeholder="Search for music"
              style={{
                padding: "5px",
                marginTop: "10px",
                float: "right"
              }}
              innerClass={{
                title: "text-title",
                input: "text-input"
              }}
            />
          </div>
        </div>

        <div className="sub-container">
          <div
            className={this.state.isClicked ? "left-bar-optional" : "left-bar"}
          >
            <hr className="blue" />
            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-dollar" /> Rating{" "}
              </b>
            </div>
            <SingleRange
              componentId="rating-list"
              dataField="ran_rating"
              className="rating-filter"
              data={[
                { start: 0, end: 1000, label: "< 1M" },
                { start: 1000, end: 10000, label: "1M-10M" },
                { start: 10000, end: 500000, label: "10M-500M" },
                { start: 500000, end: 1000000, label: "500M-1B" },
                { start: 1000000, end: 10000000, label: "> 1B" }
              ]}
              showRadio={true}
              showFilter={true}
              filterLabel="Rating"
              URLParams={false}
              innerClass={{
                label: "rating-label",
                radio: "rating-radio"
              }}
            />
            <hr className="blue" />
            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-dollar" /> Year{" "}
              </b>
            </div>

            <RangeSlider
              componentId="yearfilter"
              dataField="year"
              title="Year"
              filterLabel="Year"
              showHistogram={true}
              range={{
                start: 1945,
                end: 2018
              }}
              rangeLabels={{
                start: "1945",
                end: "2018"
              }}
              interval={1}
              react={{
                and: ["searchbox"]
              }}
              style={{
                padding: "20px",
                border: "20px",
                marginTop: "20px",
                background: "gray"
              }}
            />
            <hr className="blue" />
            <div className="filter-heading ALL">
              <b>
                {" "}
                <i className="fa fa-language" /> Languages{" "}
              </b>
            </div>
            <MultiDataList
              componentId="language-list"
              dataField="original_language.raw"
              className="language-filter"
              title="language"
              size={100}
              sortBy="asc"
              queryFormat="or"
              selectAllLabel="All Languages"
              showCheckbox={true}
              showSearch={true}
              placeholder="Search for a language"
              react={{
                and: [
                  "app-Search",
                  "results",
                  "date-filter",
                  "RangeSlider",
                  "MusicItem-list"
                ]
              }}
              data={[
                {
                  label: "English",
                  value: "English"
                },
                {
                  label: "twi",
                  value: "twi"
                },
                {
                  label: "English-fante",
                  value: "English-fante"
                }
              ]}
              showFilter={true}
              filterLabel="Language"
              URLParams={false}
              innerClass={{
                label: "list-item",
                input: "list-input"
              }}
            />
            <hr className="blue" />

            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-calendar" /> Release Date{" "}
              </b>
            </div>
            <DateRange
              title="release date"
              componentId="date-filter"
              dataField="release_date"
              className="datePicker"
            />
          </div>

          <div
            className={
              this.state.isClicked
                ? "result-container-optional"
                : "result-container"
            }
          >
            <SelectedFilters
              showClearAll={true}
              clearAllLabel="Clear filters"
            />
          </div>


          <ResultCard
            componentId="result"
            dataField="original_title"
            pagination={true}
            paginationAt="bottom"
            pages={5}
            size={12}
            Loader="Loading..."
            showResultStats={true}
            noResults="No results were found..."
            sortOptions={[
              {
                dataField: "preformer",
                sortBy: "desc",
                label: "Sort by Preformer(High to Low)"
              },
              {
                dataField: "artist",
                sortBy: "desc",
                label: "Sort by Artist(High to Low)"
              },
              {
                dataField: "vote_average",
                sortBy: "desc",
                label: "Sort by Ratings(High to Low)"
              },

              {
                dataField: "original_title.raw",
                sortBy: "asc",
                label: "Sort by Title(A-Z)"
              }
            ]}
            from={0}
            size={10}
            pagination={true}
            pages={10}
            react={{
              and: ["searchbox", "yearfilter", "title"]
            }}
            onData={res => {
              console.log(res, "dfgjkhdfojdoij");
              return {
                image: "https://i.ytimg.com/vi/L7m61Em4A5k/maxresdefault.jpg",
                title: "Song Title: " + res.title,
                description: (
                  <div>
                    <p>
                      {"Description: " +
                        res.artist +
                        " " +
                        "★".repeat(res.physica)}
                    </p>
                    <p>{"Pub Year: " + res.year}</p>
                  </div>
                )
              };
            }}
            style={{
              textAlign: "center"
            }}
          />
        </div>
      </ReactiveBase>
    );
  }
}

export default App;
