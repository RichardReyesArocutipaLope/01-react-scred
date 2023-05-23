
import './SidebarItem.css';
import { SidebarOption } from '../SidebarOption/SidebarOption';

export const SidebarItem = ({ option}) => {

  return (
    <>
      <li className='main-sidebar__item'>
        {
          (option.options.length > 0) ?
            (
              <SidebarOption option={option} isLink={false}/>
            )
            :
            (
              <SidebarOption option={option} isLink={true}/>
            )
        }
      </li>
    </>
  )
}
