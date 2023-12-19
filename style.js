function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    
    if (evenNumbers.length === 0) {
      return 0; 
    }
  
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum / evenNumbers.length;
  }
  
 
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = averageOfEvenNumbers(numbers);
  console.log(result); 
  
  function longestWord(words) {
    return words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
  }
  
 
  const wordArray = ["apple", "banana", "orange", "tomato"];
  const longest = longestWord(wordArray);
  console.log(longest); 
  function averagePages(books) {
    const totalPages = books.map(book => book.pages);
    
    if (totalPages.length === 0) {
      return 0; 
    }
  
    const sum = totalPages.reduce((acc, curr) => acc + curr, 0);
    return sum / totalPages.length;
  }
  
  
  const booksArray = [
    { title: "Book 1", author: "Author 1", pages: 200 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 180 }
  ];
  
  const average = averagePages(booksArray);
  console.log(average); 
  
  function stringFrequency(strings) {
    return strings.reduce((freqObj, str) => {
      freqObj[str] = (freqObj[str] || 0) + 1;
      return freqObj;
    }, {});
  }
  

  const inputStrings = ["hello", "world", "hello"];
  const frequencyObj = stringFrequency(inputStrings);
  console.log(frequencyObj); 
   
  function countPeopleByCity(people) {
    return people.reduce((countByCity, person) => {
      const city = person.city;
      countByCity[city] = (countByCity[city] || 0) + 1;
      return countByCity;
    }, {});
  }
  

  const peopleArray = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  const countByCity = countPeopleByCity(peopleArray);
  console.log(countByCity); 
  