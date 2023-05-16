# TypeThis
TypeThis is a powerful typing application that allows users to measure their typing speed and accuracy in real-time. With the help of advanced algorithms and multiple API calls, TypeThis provides accurate data on your typing performance, including your words per minute (WPM) and accuracy percentage.

One of the standout features of TypeThis is the ability to select a topic for the quote, and the application will generate a random quote based on that topic from an API. This feature makes practicing typing more fun and engaging, as users can choose topics that interest them and see how quickly and accurately they can type quotes related to those topics.

TypeThis is built using cutting-edge web technologies, including React and JavaScript. The user interface is clean and intuitive, making it easy for users to navigate and use the application.

Overall, TypeThis is a powerful tool for anyone looking to improve their typing skills. Whether you're a student, a professional, or just someone who wants to type faster and more accurately, TypeThis has everything you need to achieve your goals. Try it out today and see how it can help you become a better typist!



## Planning


### WPM Calculation
WPM (Words Per Minute) is calculated by taking the total number of words typed, and dividing that number by 5 (4.7 is the average length of an English word). This seems simple at face value, but in this typing application we have to take into account accuracy. The accuracy calculation is a bit more complicated. In this instance, we take the total number of correct characters, divided by your current index within the quote (what total character number you are at within the quote), multiplied by 100. We then take the accuracy calculation, divide it by 100, and multiply it by the original WPM calculation (total number of words / 5). This gives us our final WPM value, that is used in the application to give the user an accurate reading of their WPM.

```
Adjusted WPM = Total WPM * (Accuracy / 100)
```

### Color Palette
- ![#2d3142](https://placehold.co/15x15/2D3142/2D3142.png) `Gunmetal`, `2D3142` , `RGB: 45, 49, 66`, 
- ![#434a55](https://placehold.co/15x15/434A55/434A55.png) `Charcoal`, `434A55` , `RGB: 67, 74, 85`
- ![#e6e9eD](https://placehold.co/15x15/E6E9ED/E6E9ED.png) `Anti-flash White` , `E6E9ED` , `RGB: 230, 233, 237`
- ![#ff4365](https://placehold.co/15x15/FF4365/FF4365.png) `Folly`, `FF4365` , `RGB: 255, 67, 101`
- ![#50C878](https://placehold.co/15x15/50C878/50C878.png) `Emerald` , `50C878` , `RGB: 80, 200, 120`
- ![#eccb50](https://placehold.co/15x15/eccb50/eccb50.png) `Naples Yellow`, `50C878` , `RGB: 236, 203, 80`

### WireFrames
[Home Page](https://wireframe.cc/9OHwiu)

![Screen Shot 2023-05-16 at 12 24 37 PM](https://github.com/tylerwade124/type-this/assets/114370648/671bf14d-746f-4303-ad4f-26b607496820)

[Typing Page](https://wireframe.cc/jErALz)

![Screen Shot 2023-05-16 at 12 27 53 PM](https://github.com/tylerwade124/type-this/assets/114370648/ab03a013-7d35-4133-9b78-ff9e9e9a331f)

[Component Hierarchy Diagram](https://app.diagrams.net/#Ltype-this)

<img width="764" alt="Screen Shot 2022-11-10 at 9 29 58 AM" src="https://user-images.githubusercontent.com/114370648/201118315-7fcbb205-7f17-43f4-8538-4cfeb98debcf.png">



## Application Overview
[Demo](https://type-this.netlify.app)
### Pages
*Home Page*

![Screen Shot 2022-11-10 at 9 15 44 AM](https://user-images.githubusercontent.com/114370648/201115035-60343dcd-02ab-4e72-b8f6-ae94edf73094.png)
*Test / Results Page*

![Screen Shot 2023-05-16 at 12 16 14 PM](https://github.com/tylerwade124/type-this/assets/114370648/181e543c-8231-41a2-8249-cb80ba5c31ce)
![Screen Shot 2023-05-16 at 12 17 26 PM](https://github.com/tylerwade124/type-this/assets/114370648/3bb00dee-42ab-4ef2-8d3b-4985d250a161)

> When you make errors while typing the quote, you are allowed to continue without correcting the error, this will correct itself in the final WPM calculation. You can also see where exactly you made the errors, as seen in the images above.


### Rules/Instructions
1. **Choose a topic** - Select a topic from the home page to generate a random quote related to that topic.
2. **Start typing** - Once the quote appears on the screen, start typing it as accurately and quickly as possible.
3. **Watch your progress** - As you type, the application will keep track of your WPM and accuracy percentage, which will be displayed on the screen once you complete each quote.
4. **Fix your mistakes** - If you make a mistake, the application will highlight it in red. You can go back and fix the mistake by using the backspace key.
5. **Complete the quote** - Keep typing until you've completed the entire quote. Once you've finished typing, the application will display your final WPM and accuracy percentage.
6. **Try again** - If you're not satisfied with your performance, you can simply hit "OK" on the window that displays your results, and it will automatically generate the next quote.
7. **Practice regularly** - The more you practice, the better you'll become at typing. Try to practice regularly to improve your WPM and accuracy percentage.
8. **Have fun** - Typing can be challenging, but it can also be fun! Choose topics that interest you and enjoy the process of becoming a better typist.


## Source
[API](https://api.quotable.io/random)