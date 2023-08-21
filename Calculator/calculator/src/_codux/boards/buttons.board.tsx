import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
	name: "buttons",
	Board: () => (
		<div>
			<button id="clear">C</button>
			<button id="plus">+</button>
			<button id="multiply">X</button>
			<button id="backspace"> ⌫ </button>
			<br />
			<button id="7">7</button>
			<button id="8">8</button>
			<button id="9">9</button>
			<button id="minus">-</button>
			<br />
			<button>4</button>
			<button>5</button>
			<button>6</button>
			<button>+</button>
			<br />
			<button>1</button>
			<button>2</button>
			<button>3</button>
			<button>=</button>
			<br />
			<button>﹝</button>
			<button id="equal">0</button>
			<button>﹞</button>
		</div>
	),
});
