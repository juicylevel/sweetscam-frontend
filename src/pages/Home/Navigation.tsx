import { Button, ButtonProps, Stack } from '@mui/material';

const NavItem: React.FC<ButtonProps> = (props) => (
    <Button sx={{ mr: 3, color: 'white', display: 'block' }} {...props} />
);

const Navigation = () => (
    <Stack flexDirection="row">
        <NavItem>О нас</NavItem>
        <NavItem>Дорожная карта</NavItem>
        <NavItem>История</NavItem>
        <NavItem>Ссылка на АХ</NavItem>
        <NavItem>whitepapper</NavItem>
    </Stack>
);

export default Navigation;
