import React from 'react'
import Card from './components/Card'

const App = () => {
 const jobs = [
  {
    logo: "https://th.bing.com/th/id/OIP.lMlehYqlWlrzobTtzJ6fpAHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Google",
    role: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Bengaluru, India"
  },
  {
    logo: "data:image/webp;base64,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",
    name: "Microsoft",
    role: "Software Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Hyderabad, India"
  },
  {
    logo: "https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=159&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Amazon",
    role: "Backend Developer",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Bengaluru, India"
  },
  {
    logo: "https://th.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=158&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Meta",
    role: "Full Stack Developer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://th.bing.com/th/id/OIP.GNd-47SLqoNBqTgGaeEMYwHaI5?w=146&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Apple",
    role: "iOS Developer",
    datePosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$36/hour",
    location: "Hyderabad, India"
  },
  {
    logo: "https://th.bing.com/th/id/OIP.uI2jp3YvHR18LHqMlHEAYAHaEK?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "NVIDIA",
    role: "Machine Learning Engineer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Pune, India"
  },
  {
    logo: "data:image/webp;base64,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",
    name: "Adobe",
    role: "UI/UX Developer",
    datePosted: "3 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/020/190/686/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    name: "Netflix",
    role: "Software Engineer",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://th.bing.com/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Salesforce",
    role: "React Developer",
    datePosted: "10 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$34/hour",
    location: "Bengaluru, India"
  },
  {
    logo: "https://th.bing.com/th/id/OIP.YTBIiJGeLVxHGrN6BGIhGgHaHa?w=158&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Oracle",
    role: "Cloud Engineer",
    datePosted: "2 weeks ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "Pune, India"
  }
];
console.log(jobs)
  return (
    <div className='parent'>
      {jobs.map(function (ele) {
        return <Card company={ele.name} post={ele.datePosted} logo={ele.logo} post={ele.role} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} loc={ele.location}/>
      })}
    </div>
  )
}

export default App
