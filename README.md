
# React Test Task

## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run the application
1. Open a new bash shell
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```

## Run the tests
1. Open a new bash shell
2. ```cd client```
3. ```npm run test``` or ```yarn test```

Price tickers are real-time via web-sockets.

## Features
- **Searching input and filterable table** - you can filter the tickers in the table by entering the name of the desired ticker in the input field. Also you can remove the text you've typed by clicking the "x" button in the input field.
- **Removable tickers** - Any ticker may be removed from the watching group by clicking the "X" button. If user wants to add it back to watching group - chose it in special section with removed tickers and press the button with the ticker you need.
- **Interval time** - It's possible to specify interval time by user.
- **Visual effects** - Positive and negative changes in the prices are highlighted.
- **Skeletons** - If the server isn't started, skeletons will be rendered in the table.