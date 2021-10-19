<h2>Decoder Ring</h2>
A decoder application built with JavaScript that uses three encrypting and decrypting methods: Caesar, Polybius, and Substitution.<br />
<h3>Caesar</h3>
<img src="https://github.com/AudreyMargolis/Project-Decoder-Ring/blob/main/b6a94b251bbbe6dae7e3e84ed8be33a4-image.png" />
The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.
For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".<br />
```"thinkful" -> "wklqnixo"```<br />
When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.<br /><br />
<h3>Polybius</h3>
<img src="https://github.com/AudreyMargolis/Project-Decoder-Ring/blob/main/Capture.PNG" />
The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.<br />
```"thinkful" -> "4432423352125413"```<br />
When decoding the message, each pair of numbers is translated using the coordinates.
<h3>Substitution</h3>
<img src="https://github.com/AudreyMargolis/Project-Decoder-Ring/blob/main/19c12a6ee38ceddd82d75e12edf53189-image.png" />
The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.
<br />
For example, in the image above, the word "HELLO" would be translated as follows:<br />

-"H" becomes "R".<br />
-"E" becomes "M".<br />
-"L" becomes "W".<br />
-"O" becomes "L".<br />
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
