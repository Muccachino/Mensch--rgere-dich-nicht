"use strict";

import { doesNotMatch } from "assert";
import "./styles.scss";
console.log("Hello World 10");

const boardFields = [
  1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
  1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,
  1, 1,
];

const createBoard = () => {
  let board = document.getElementById("app");
  boardFields.forEach((field) => {
    let newField = createTags("div", "field", null, null);
    expandHtml(board, newField);
    if (field == 1) {
      let circle: HTMLElement = createTags("div", "circle", null, null);
      expandHtml(newField, circle);
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
  let element = document.createElement(htmlTags);
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
