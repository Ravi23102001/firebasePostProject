import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem, dolorum cum, magni libero autem rerum qui harum, ipsa doloribus dolores nemo non? Eaque corrupti aliquid eum magnam voluptatum iure sapiente dolorum labore consequatur ea. Hic debitis praesentium quaerat dolore. Assumenda obcaecati, iusto, vero quos adipisci cum blanditiis, sed suscipit ipsum perferendis et? Mollitia explicabo neque sapiente sit quasi. Doloribus quisquam numquam ratione commodi explicabo tempora laudantium, praesentium facilis sit omnis aperiam perferendis dolore cum voluptates enim nulla! Iure quasi nisi ad sit quisquam! Neque, nihil quo, ullam excepturi iste omnis provident commodi non voluptatum magnam illo repellat! Eos aut officiis quos quis, esse corrupti perferendis itaque sequi accusamus libero eum exercitationem voluptate voluptatum autem culpa, quae consequuntur necessitatibus, voluptatem atque facere molestiae consequatur! Tempora delectus sit dolores odit obcaecati sapiente ullam neque, corrupti temporibus quod quam quisquam ipsum corporis placeat tempore molestiae voluptate consequuntur aperiam sunt. Quas, asperiores est modi delectus tempora praesentium id quo cum iusto mollitia laboriosam ipsam quam rerum adipisci perspiciatis. Saepe iure laudantium placeat. Quidem nemo deserunt, dignissimos nam illo quia dolore ducimus voluptates? Sapiente, voluptatum, quidem illum earum quam hic aliquid veritatis soluta minus non, consequuntur blanditiis similique asperiores quaerat magni ab excepturi. Quaerat.{params.id}</div>
    )
}

export default UserDetails