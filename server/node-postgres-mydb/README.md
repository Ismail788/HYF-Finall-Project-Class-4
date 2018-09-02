()-create table song with three primary keys, record,band_has_band,Artist
()-create table record with relishtion one to many with song
 | Header song     | Header record     |
| :------------- | :------------- |
|  id_song| Item  id_record   |
| record_id_record INT | id_record|
| :------------- | :------------- |
# this copy of

exports.up = function(knex, Promise) {
  return knex.schema.createTable('song', (table) =>{
    table.increments();
    table.string('title');
    table.string('alternativeTitle');
    table.string('artist');
    table.string('performer')
    table.string('band');
    table.integer('year');
    table.string('language');
    table.string('physical');
    table.string('catNo');
    table.string('barcodes');
    table.string('tracks');
    table.string('ALL');
    table.string('side_a');
    table.string('side_b');
    table.string('band_has_artist');
    table.integer('id_record').references('id').inTable('record').onDelete('CASCADE').index();
    //table.integer('id_song').references('id').inTable('band').onDelete('CASCADE').index();
    table.integer('id_artist').references('id').inTable('artist').onDelete('CASCADE').index();
  table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('song');

};

#copy of record_id_record | Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |
exports.up = function(knex, Promise) {
  return knex.schema.createTable('record', (table)=>{
    table.increments();
    table.integer('id_record');
    table.string('title').notNullable();
    table.string('alternativeTitle').notNullable();
    table.string('record_lable');
    table.string('location');
    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('record');

};

#copy fo band_has_artist

exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', (table)=>{
    table.increments();
    table.integer('id_artist');
    table.string('full_name');
    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist');

};


#copy of artist

exports.up = function(knex, Promise) {
  return knex.schema.createTable('band_has_artist', (table)=>{
    table.increments();
    table.integer('id_band_has_artist');
    table.string('band_id_band').notNullable();
    table.string('artist_id_artist').notNullable();

    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('band_has_artist');

};

#copy fo band

exports.up = function(knex, Promise) {
  return knex.schema.createTable('band', (table)=>{
    table.increments();
    table.integer('id_band');
    table.string('name');

    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('band');

};

#end
#seeds tables
const songs = require(' ../../../songs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song').del()
    .then(function () {
      return knex('song').insert(songs);
      // Use knex to insert songsList into table songs
  });

};
#record | Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |
const records = require(" ../../../songs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('record').del()
    .then(function () {
      const recordsList =[];
    records.map(record=> {
    recordsList.push({
        'title': record.title,
        'alternativeTitle': record.alternativeTitle,
        'record_lable': record.record_lable,
        'location': record.location
      })
    });
      // Inserts seed entries
      return knex('record').insert(recordsList);
      console.log(recordsList);
    });
};
#artist
const artists = require(" ../../../songs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      const artistsList =[];
    artistsList.map(artist=> {
    artistsList.push({
        'full_name': band.full_name

      })
    });
      // Inserts seed entries
      return knex('artist').insert(artistsList);
      console.log(artistsList);
    });
};
#band_has_artist

const band_has_artistList = require(" ../../../songs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      const band_has_artistList =[];
    band_has_artistList.map(band_has_artist=> {
    band_has_artistList.push({
        'id_band': band.id_band,
        'id_artist': artist.id_artist

      })
    });
      // Inserts seed entries
      return knex('band_has_artist').insert(band_has_artistList);
      console.log(band_has_artistList);
    });
};
#band_id_band
const bands = require(" ../../../songs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('band').del()
    .then(function () {
      const bandsList =[];
    bands.map(band=> {
    bandsList.push({
        'name': band.name


      })
    });
      // Inserts seed entries
      return knex('band').insert(bandsList);
      console.log(bandsList);
    });
};
#reactive item app.js
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
