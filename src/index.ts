"use strict";

import { doesNotMatch } from "assert";
import "./styles.scss";
console.log("Hello World 10");

const boardFields: number[] = [
  2, 2, 0, 0, 1, 1, 1, 0, 0, 3, 3, 2, 2, 0, 0, 1, 30, 1, 0, 0, 3, 3, 0, 0, 0, 0,
  1, 30, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 30, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 30, 1,
  1, 1, 1, 1, 1, 20, 20, 20, 20, 9, 40, 40, 40, 40, 1, 1, 1, 1, 1, 1, 50, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 1, 50, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 50, 1, 0, 0, 0, 0,
  5, 5, 0, 0, 1, 50, 1, 0, 0, 4, 4, 5, 5, 0, 0, 1, 1, 1, 0, 0, 4, 4,
];

const createBoard = () => {
  let board = document.getElementById("app");
  boardFields.forEach((field) => {
    let newField: HTMLElement = createTags("div", "field", null, null);
    expandHtml(board, newField);
    if (field == 1) {
      let circle: HTMLElement = createTags("div", "circle", null, null);
      expandHtml(newField, circle);
    }
    if (field == 2) {
      let fieldYellow: HTMLElement = createTags(
        "div",
        "fieldYellow",
        null,
        null
      );
      expandHtml(newField, fieldYellow);
    }
    if (field == 3) {
      let fieldBlue: HTMLElement = createTags("div", "fieldBlue", null, null);
      expandHtml(newField, fieldBlue);
    }
    if (field == 4) {
      let fieldGreen: HTMLElement = createTags("div", "fieldGreen", null, null);
      expandHtml(newField, fieldGreen);
    }
    if (field == 5) {
      let fieldRed: HTMLElement = createTags("div", "fieldRed", null, null);
      expandHtml(newField, fieldRed);
    }
    if (field == 20) {
      let endZoneYellow: HTMLElement = createTags(
        "div",
        "endZoneYellow",
        null,
        null
      );
      expandHtml(newField, endZoneYellow);
    }
    if (field == 30) {
      let endZoneBlue: HTMLElement = createTags(
        "div",
        "endZoneBlue",
        null,
        null
      );
      expandHtml(newField, endZoneBlue);
    }
    if (field == 40) {
      let endZoneGreen: HTMLElement = createTags(
        "div",
        "endZoneGreen",
        null,
        null
      );
      expandHtml(newField, endZoneGreen);
    }
    if (field == 50) {
      let endZoneRed: HTMLElement = createTags("div", "endZoneRed", null, null);
      expandHtml(newField, endZoneRed);
    }

    if (field == 9) {
      let dicefield: HTMLElement = createTags("div", "dicefield", null, null);
      expandHtml(newField, dicefield);
    }
  });
};

createBoard();

function createTags(
  htmlTags: string,
  className: string | null,
  idName: string | null,
  innerHtml: string | null
) {
  let element: HTMLElement = document.createElement(htmlTags);
  if (className != null) {
    element.classList.add(className);
  }
  if (idName != null) {
    element.id = idName;
  }
  if (innerHtml != null) {
    element.innerHTML = innerHtml;
  }
  return element;
}

function expandHtml(expand: any, tags: any) {
  expand.appendChild(tags);
}
