import { useContext, useState } from 'react';
import { ThemeProvider, useTheme } from './Context';
import { data, IItem } from './data';
import './styles.css';

type Theme = 'light' | 'dark';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            <ThemeProvider theme={currentTheme}>
                <List data={data} />
            </ThemeProvider>
        </div>
    );
}

function List(props: { data: IItem[] }) {
    return (
        <div>
            {data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    useContext;
    const className = `listItem listItem_${useTheme()}`;
    return <div className={className}>{props.caption}</div>;
}
