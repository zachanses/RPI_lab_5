import React from 'react';

const key = '37957b6d5e534f56a5684d1380ca4cc3';
const CHUNK_SIZE = 5;
const PAGE_CAPACITY = 40;

export default class APIManager{

    static get key(){
        return key;
    }

    static get CHUNK_SIZE(){
        return CHUNK_SIZE;
    }

    static get PAGE_CAPACITY(){
        return PAGE_CAPACITY;
    }

    static loadSources(){
        const url = `https://newsapi.org/v2/sources?apiKey=${key}`;
        const request = new Request(url);
        return fetch(request).then(response => response.json())
    }

    static loadRequest(query){
        const url = `https://newsapi.org/v2/${query}&pageSize=${PAGE_CAPACITY}&page=1&apiKey=${key}`;
        const request = new Request(url);
        return fetch(request).then(response => response.json())
    }
}