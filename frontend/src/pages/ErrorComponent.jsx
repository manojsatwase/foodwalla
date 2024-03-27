import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
  const error = useRouteError();
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      fontSize: "18px", 
    }}>
      <div style={{
        textAlign: "center",
        padding: "20px", 
      }}>
        <p style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px", color: "#ff6347" }}>Opps! {error?.status} Page {error?.statusText}</p>
        <p style={{ color: "#696969" }}>Something went wrong!!</p>
        <img style={{width:"100%"}} src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="error"/>
    </div>
</div>
  )
}

export default ErrorComponent;
