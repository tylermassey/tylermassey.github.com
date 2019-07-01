import { readFileSync } from "fs";
import marked from "marked";

import "./index.css";

const markdownContent = readFileSync(__dirname + "/content.md", "utf-8");

document.getElementById("content").innerHTML = marked(markdownContent);
