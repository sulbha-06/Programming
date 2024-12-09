async function fetchData(condition) {
  if (condition) {
    try {
      // Assuming you are using the fetch API for making API requests
      const response = await fetch(
        "	https://dummy.restapiexample.com/api/v1/employees"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      // You can return a default value or handle the error as needed
      return { error: "Failed to fetch data from the API" };
    }
  } else {
    // Return a hardcoded value when the condition is not met
    return "Hardcoded Value";
  }
}

// Example usage:
const conditionMet = false; // Change this to test different conditions
const result = fetchData(conditionMet);
result.then((data) => console.log(data));
