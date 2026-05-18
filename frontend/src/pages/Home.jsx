import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchFilter from "../components/SearchFilter";
import AIRecommendation from "../components/AIRecommendation";

function Home() {

  return (

    <div style={{ padding: "20px" }}>

      <h1>AI Employee Performance System</h1>

      <EmployeeForm />

      <SearchFilter />

      <EmployeeList />

      <AIRecommendation />

    </div>

  );

}

export default Home;