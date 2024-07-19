import './App.css';
import image from './IMG_4794.JPG';
import ListItems from './ListItems';

const content_list = [
  {
    "title": "Software Engineer at TechCorp",
    "link": "https://www.linkedin.com/jobs/view/software-engineer-at-techcorp-1234567890/",
    "imgUrl": "https://st4.depositphotos.com/13349494/26799/i/450/depositphotos_267998672-stock-photo-selective-focus-young-woman-virtual.jpg"
  },
  {
    "title": "Marketing Specialist at MarketGiant",
    "link": "https://www.linkedin.com/jobs/view/marketing-specialist-at-marketgiant-0987654321/",
    "imgUrl": "https://as2.ftcdn.net/v2/jpg/01/65/71/33/1000_F_165713359_JlPpdh8a8xrNTZj6G5Rm97vRcW2xoeBy.jpg"
  },
  {
    "title": "React Tutorial for Beginners",
    "link": "https://www.youtube.com/watch?v=dGcsHMXbSOA",
    "imgUrl": "https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=NUf6D4ZgRm6XC7Av2WwmkW5RkHNKbnIgulwmvbEshac="
  },
  {
    "title": "How to Cook Pasta Perfectly",
    "link": "https://www.youtube.com/watch?v=9lO06ZsPqJg",
    "imgUrl": "https://miro.medium.com/v2/resize:fit:638/1*PI6VvWmcCQmTznE_pCq0gw.jpeg"
  },
  {
    "title": "JavaScript Fundamentals",
    "link": "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    "imgUrl": "https://etimg.etb2bimg.com/photo/99975100.cms"
  },
  {
    "title": "Introduction to CSS Flexbox",
    "link": "https://www.youtube.com/watch?v=JJSoEo8JSnc",
    "imgUrl": "https://t4.ftcdn.net/jpg/04/17/28/93/360_F_417289346_hrs0D4Lo8dSv3aWDqkQpRB0U9PbtFX6n.jpg"
  },
  {
    "title": "Facebook Post: New Feature Release",
    "link": "https://www.facebook.com/YourPage/posts/10159100123456789",
    "imgUrl": "https://media.istockphoto.com/id/1961324209/photo/a-concept-where-various-creative-thoughts-are-formed-within-a-light-bulb-3d-rendering.jpg?b=1&s=612x612&w=0&k=20&c=PhQyAW5LaWqdVm7qTg9c4pNH8puAhGSPnvyXdQE99qE="
  },
  {
    "title": "Facebook Post: Event Announcement",
    "link": "https://www.facebook.com/YourPage/posts/10159099987654321",
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfuEdWI3pcK30UcVTj8UDGUCNCbaoBdF6pA&s"
  },
  {
    "title": "JavaScript Fundamentals",
    "link": "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQiWKK0NYKFt8pU-sb_kTEtPqztQg_i6tXA&s"
  },
  {
    "title": "Introduction to CSS Flexbox",
    "link": "https://www.youtube.com/watch?v=JJSoEo8JSnc",
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pcob0XSZMWcRfKFQZPriFyt9XRvUXj8gtQ&s"
  },
  {
    "title": "Facebook Post: New Product Launch",
    "link": "https://www.facebook.com/YourPage/posts/10159100234567890",
    "imgUrl": "https://cdn.prod.website-files.com/62233f4a508be02900c98959/64de620fd8d0e9a29561659f_Social%20Design%20First_%20Unleashing%20the%20Power%20of%20Engaging%20Content%20for%20Digital%20Success.png"
  },
  {
    "title": "LinkedIn Post: Career Advice",
    "link": "https://www.linkedin.com/feed/update/urn:li:activity:6772589412596230144/",
    "imgUrl": "https://media.licdn.com/dms/image/D5612AQHJ_J0G73e5zQ/article-cover_image-shrink_720_1280/0/1707904429301?e=2147483647&v=beta&t=R3ZPuzEN4lHSzbGIWOibxuW6XOhKXmBu2tvuoBtGNfE"
  },
  {
    "title": "How to Use Git and GitHub",
    "link": "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
    "imgUrl": "https://www.socialpilot.co/wp-content/uploads/2024/04/Social-Media-Marketing-Tools.svg"
  }
]










function App() {
  return (
      <div className='bgi'>
      <div className="glass-con">
          <img src={image} className="logo"/>
          <h1 className="logoName">Techmore 03</h1>
          <h3 className="logoDes">Tech & Info</h3>       
        <ul className="listItemCon">
          {content_list.map((item) => ( 
            <ListItems item={item}/>
          ))}
        </ul>
      </div>
      </div>
  )
}

export default App;
