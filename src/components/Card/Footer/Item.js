
const Item = ({ children, title, link }) => {
  if(link){
    return(
      <a href={link} target='_blank' className='footer-item' rel='noreferrer'>
        { children }
        <span>{ title ? title : 'No data.'}</span>
      </a>
    )
  } else {
    return(
      <div className='footer-item'>
        { children }
        <span>{ title ? title : 'No data.'}</span>
      </div>
    )
  }
}

export default Item