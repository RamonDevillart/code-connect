import Image from 'next/image';
import { Avatar } from '../Avatar';

import styles from './cardPost.module.css';

export const CardPost = ({ post })=> {
    return(
        <article>
            <header>
                <figure>
                    <Image 
                        src={post.cover} 
                        width={438} 
                        height={133} 
                        alt={`Capa do post de título: ${post.title}`} 
                    />
                </figure>
            </header>

            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>

            <footer>
                <Avatar
                 imageSrc={post.author.avatar}
                 name={post.author.username}
                />
            </footer>
        </article>
    )
}