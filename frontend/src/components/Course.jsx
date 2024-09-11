import React from 'react'
import Cards from './Cards';
import list from "../../public/list.json";
import {Link} from "react-router-dom"
function Course() {
  // const filderData=list.filter((data)=>data.category==="");
  return (
    <>
    <div className="container max-w-screen-2xl mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
      <h1 className='text-2xl md:text-4xl'>Lorem ipsum dolor, sit amet consectetur</h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt aperiam veritatis, labore mollitia possimus a! Modi ab alias aliquam sapiente, omnis earum in iusto reprehenderit ipsam molestias eveniet quam quis vero provident quo sequi excepturi temporibus? Maiores eius nemo voluptatum, officiis a doloribus tempore voluptate, impedit voluptatem necessitatibus, saepe non commodi? Dicta ad odit neque tempore voluptatum provident consequuntur, accusamus atque. Id incidunt explicabo distinctio ex deserunt corrupti inventore aliquam dolore quae fuga ullam, minima facere nostrum rerum odit dicta veniam qui recusandae corporis, architecto quasi? Aliquid a quaerat consequuntur quod culpa itaque nemo et placeat consequatur qui? Et velit expedita doloremque? Exercitationem voluptatum ipsa doloremque officiis odio autem maiores? Consectetur non vero placeat nobis! Maxime dignissimos ad doloremque ab laudantium harum illum quia debitis incidunt iste. Delectus sequi labore explicabo unde adipisci aspernatur harum, voluptas doloremque eaque veritatis magni amet nam rem distinctio possimus iusto tempora cum? Quod est unde praesentium incidunt tempore. Placeat voluptatem repudiandae assumenda illum veritatis a nostrum. Molestiae cupiditate, enim sed natus et neque veniam ea, non illo eum voluptatum at minus repellat deserunt perferendis vero inventore numquam! Cumque porro cupiditate eligendi quas eveniet delectus perspiciatis in numquam nihil sapiente? Distinctio labore eveniet ducimus.</p>
        <Link to="/">
        <button className='btn btn-secondary mt-4'>Back</button>
        </Link>
      </div>

    
    <div class="grid grid-cols-1 mt-5 md:grid-cols-4">
    {
        list.map((item)=>{
          return(
            <Cards  key={item.id} item={item}/>
          )
      })
    }
    </div>
    </div>
    </>
  )
}

export default Course
