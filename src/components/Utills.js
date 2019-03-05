
import React from 'react';
import {AsyncStorage} from "react-native";

class Utills {

  constructor() {
    this.endPoint = 'http://localhost:3001'
  }

  startLoading() {
    return true
  }

  stopLoading() {
    return false
  }

  toTimestamp(strDate) {
    let datum = Date.parse(strDate);
    return datum / 1000;
  }

  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  async saveItem(key,data) {
    try {
      const savedItem =  await AsyncStorage.setItem(key, JSON.stringify(data))
      return savedItem;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
    return
  }


  postData(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        credentials: 'include',
        body: JSON.stringify(data),
      }).then(function (res) {
        return res.json()
      }).then((data) => {
        resolve(data)
      }).catch(error => {
        reject(error)
      });
    })
  }

  clearBasket() {
    this.saveItem('myBasket', [])
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: new Headers({'content-type': 'application/json'}),
        credentials: 'include'
      }).then(function (res) {
        console.log(res)
        return res.json()
      }).then((data) => {
        resolve(data)
      }).catch(error => {
        reject(error)
      });
    })
  }

  getFoodCategories() {
    return new Promise((resolve) => {
      this.getData(`${this.endPoint}/getCategories`).then((res) => {
        resolve(res)
      })
    })
  }

  getFoodAllergies() {
    return new Promise((resolve) => {
      this.getData(`${this.endPoint}/getFoodAllergies`).then((res) => {
        resolve(res)
      })
    })
  }

  navigate = (url) => {
    window.location.href = url
  }

  isAuthenticated() {
    return new Promise((resolve) => {
      this.getData(`${this.endPoint}/checkAuthentication`).then((data) => {
        if (data.status == 'authenticated') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }

}

export default new Utills()
