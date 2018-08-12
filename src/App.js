import React, { Component } from 'react';
//import logo from './logo.svg';
//import './data/knex.js';
//import  './.storybook/data/artist-list-1.json';
import { ReactiveBase, CategorySearch, SingleRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';


class App extends Component {
render() {

    return (
      <ReactiveBase
        app="africanMusicArchive"
        credentials="GncOn3RMs:8a3c3e25-7666-4a97-b310-268383d3c563"
        type='africanMusicArchive'
        >
          <div>
            <h1>African Music Archive</h1>

            <div >
    <CategorySearch
      componentId="searchbox"
      dataField={["titles", "artists"]}
      categoryField="titles.raw"
      placeholder="Search for music"
      style={{
      padding: "5px",
      "marginTop": "10px",
      "float": "right"
}}
    innerClass={{
    title: 'text-title',
    input: 'text-input'
}}
className="CategorySearch"
  />
  <RangeSlider
  componentId="yearfilter"
  dataField="publishedYear"
  title="Year"
  filterLabel="Year"
  showHistogram={true}
  range={{
  start: 1945,
  end: 2018
}}
rangeLabels={{
  start: "1945",
  end: "2018",

}}
interval={1}
react={{
and: ["searchbox"]
}}
style={{
'padding': "20px",
'border': '20px',
"marginTop": "20px",
"background": "lightblue",

}}
  />
</div>
  <ResultCard
        componentId="result"
              dataField="titles"
              title="Results"
              from={0}
              size={5}
              pagination={true}
              pages={6}
              react={{
                and: ["searchbox", "yearfilter", "locations"]
              }}

      onData={(res) => {
        console.log(res.publishedYear);
        return {
        image: "https://i.ytimg.com/vi/L7m61Em4A5k/maxresdefault.jpg",
            title: 'Song Title: '+res.titles,
            description: (
                <div>
                      <p>
                {
                  'Description: '+res.artists + " " + "★".repeat(res.location)}
                    </p>
                  <p>{'Pub Year: '+res.publishedYear}</p>
                    </div>
            ),


      }
    }}
    style={{
      "textAlign": "center",

  }}
      />
    </div>
  </ReactiveBase>
    );
  }
}

export default App;
