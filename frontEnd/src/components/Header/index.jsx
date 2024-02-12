import { Container } from './styles.js'
import { Logo } from './../Logo/index'
import { Receipt, Menu, X, Search, LogOut  } from 'lucide-react'
import { Input } from './../Input/index'
import { Link } from 'react-router-dom'
import { Footer } from './../Footer/index'
import { Button } from './../Button/index'
import { useState, useEffect } from 'react'
import { useAuth } from "../../hooks/authContext"

export function Header() {
    const { SignOut, user } = useAuth()
    
    const [menuMobileOpen, setMenuMobileOpen] = useState(false)

    const openMenu = () => setMenuMobileOpen(true)
    const closeMenu = () => setMenuMobileOpen(false)

    useEffect(() => window.addEventListener('resize', () => window.innerWidth < 768 ? "" : setMenuMobileOpen(false)))

    return (
        <Container>
            <div className={!menuMobileOpen ? 'menu-close': 'menu-open'}>
                {!menuMobileOpen ? <Menu onClick={openMenu} cursor='pointer' className='menu-icon'/> : <p><X onClick={closeMenu} cursor='pointer'/>Menu</p>}
                {!menuMobileOpen && user.is_admin === 1 ? <Logo isAdmin={true}/> : !menuMobileOpen && <Logo/>}
                <div className='input'>
                    <Input id="search" type="text" placeholder='Busque por pratos ou ingredientes' icon={Search}/>
                    <div className="options">
                        {menuMobileOpen && user.is_admin === 1 && <Link to="/newproduct">Novo Produto</Link>}
                        {menuMobileOpen && <Link to="/" onClick={SignOut}>Sair</Link>}
                    </div>
                </div>
                {!menuMobileOpen && <div className='mobile-requests'>
                    <p>0</p>
                    <Receipt />
                </div>}
                {!menuMobileOpen && <div className='requests'>
                    {user.is_admin === 1 ? <Button><Link to="/newproduct">Novo prato</Link></Button> : <Button><Receipt />Pedidos (0)</Button>}
                    <LogOut width={32} height={32} cursor='pointer' onClick={SignOut}/>
                </div>}
                {menuMobileOpen && <Footer />}
            </div>
        </Container>
    )
}