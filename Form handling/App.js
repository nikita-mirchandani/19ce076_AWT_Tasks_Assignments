import './App.css';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      Welcome to React Application
      <SignupForm/>
    </div>
  );
}


// first of all open terminal and write below command to include all files inside new folder named react-form
// npx create-react-app react-form
// A react-form folder is being created and inside it we have all necesaary files.
// so write below command and it will open browser
// PS D:\Study\5th sem\AWT\Form handling\react-form> npm start 
// Now go in react-form folder and inside it go to public folder and open index.html--> there you'll find the html code of the browser
// Then go to src folder and inside it open index.js file and ther's this logic of logo and some sentence
// now u can edit the code inside file src/app.js 
// remove previous code between
// { <div className="App">----------------code here------------ <div>}
// so after that u can write whatever u want
// now create one components folder inside src folder  and inside components make a new file signupform.js

export default App;
