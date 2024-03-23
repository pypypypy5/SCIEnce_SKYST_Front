import { Menu, MenuItem, Form, Segment, Button, MenuMenu} from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Header(){
    const nav = useNavigate();
    return(
        <div>
            <Segment inverted color='olive'>
            <Menu secondary widths={10}>
                <MenuItem position="left" onClick={()=>{nav('/')}}>
                    로고 들어갈 자리
                </MenuItem>
                <MenuItem/>
                <MenuItem onClick={()=>{nav('/write')}}>
                    글 쓰기
                </MenuItem>
                <MenuItem onClick={()=>{nav('/read')}}>
                    글 읽기
                </MenuItem>
                <MenuItem onClick={()=>{nav('/history')}}>
                    히스토리
                </MenuItem>
                <MenuItem/>
                <MenuItem position="right" onClick={()=>{nav('/profile')}}>
                    유저네임
                </MenuItem>
            </Menu>
            </Segment>
        </div>
    )
}