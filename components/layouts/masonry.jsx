import masonry from '../../styles/modules/masonry.module.scss'

export default function Masonry({ children }) {
   return <div className={masonry.masonry}>{children}</div>
}
