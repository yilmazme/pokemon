import React from 'react'
import Pokemons from '../Pokemons';
import { render  } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import allReducers from "../../store/reducers";
import { Provider} from "react-redux";


const store = createStore(
    allReducers
  );




test("yakalanan pokemon sayısı başta 0 olmalı", ()=>{

    const component = render(
    <Provider store={store}>
        <Pokemons/>
        </Provider>);
    const cardContainer = component.getByTestId("catchContainer")

    expect(cardContainer.childElementCount).toBe(0);
})