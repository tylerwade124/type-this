// import { useState, useRef } from 'react'

// import useTypingGame from 'react-typing-game-hook'





// const TypingGameComponent = () => {

//     const cloud = [`<area>` `<button>` `</button>` `<br />` `<font>` `<head>` `</head>` `<header>` `</header>` `<iframe>` `<img>` `<link>` `</main>` `<nav>` `</nav>` `</meta>` `<map>` `</script>` `<div>` `</div>` `<table>` `</table>` `<textarea>` `</textarea>` `<li>` `li*5` `</li` `<ul>` `</ul>` `<title>` `</title>` `<span>` `</span>` `import` `export` `function` `default` `id` `class` `=` `===` `<ol>` `</ol>` `<h1>` `</h2>` `<h3>` `</h4>` `<h5>` `</h6>` `{` `}` `[` `]` `;` `:` `"` `'` `>` `<` `,` `.` `/` `?` `|` `::` `+` `-` `*` `@` `goto` `instaceof` `const` `let` `var` `else` `class` `for` `while` `typeof` `New` `true` `false`]

//     cloud.sort(() => 0.5 - Math.random())



//   const {
//     states: { chars, charsState },
//     actions: { insertTyping, resetTyping, deleteTyping },
//   } = useTypingGame(cloud);


//   return (
//     <h1
//       onKeyDown={e => {
//         const key = e.key;
//         if (key === 'Escape') {
//           resetTyping();
//         } else if (key === 'Backspace') {
//           deleteTyping(false);
//         } else if (key.length === 1) {
//           insertTyping(key);
//         }
//         e.preventDefault();
//       }}
//       tabIndex={0}
//     >
//       {chars.split('').map((char, index) => {
//         let state = charsState[index];
//         let color = state === 0 ? 'white' : state === 1 ? 'green' : 'red';
//         return (
//           <span key={char + index} style={{ color }}>
//             {char}
//           </span>
//         );
//       })}
//     </h1>
//   );
// };
// export default TypingGameComponent;