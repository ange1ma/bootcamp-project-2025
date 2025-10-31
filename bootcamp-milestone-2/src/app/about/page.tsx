export default function About() {
  return (
    <main>
      <h1 className="page-title">Contact me here!</h1>
      <form id="contact-form">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name"/> 
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"/>
        <label htmlFor="message">Message: </label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}