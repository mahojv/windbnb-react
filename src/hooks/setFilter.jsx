import React, {useEffect, useState } from 'react'


/**
 * Description Filtro de busqueda
 *
 * @export
 * @param {array} contentInputSearch entrada de valores String en array para busqueda
 * @param {number} guestSearch entrada de contador de huespedes
 * @param {array} arrayStay array principal
 */
export default function setFilter(contentInputSearch, guestSearch, arrayStay) {
    let arrayFiltered = arrayStay.filter(function (search) {
      if (contentInputSearch.length === 0) {
        if (search.maxGuests >= guestSearch) {
          return search
        }
      } else if (contentInputSearch.length === 1) {
        if (
          contentInputSearch[0]
            .toLowerCase()
            .includes(search.city.toLowerCase()) &&
          search.maxGuests >= guestSearch
        ) {
          return search
        }
      } else if (contentInputSearch.length === 2) {
        if (
          contentInputSearch[0]
            .toLowerCase()
            .includes(search.city.toLowerCase()) &&
          contentInputSearch[1]
            .toLowerCase()
            .includes(search.country.toLowerCase()) &&
          search.maxGuests >= guestSearch
        ) {
          return search
        }
      }
    })
    return arrayFiltered
  }