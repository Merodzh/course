import Button from "./button/Button";

export default function TabSection({Onchange, isActive}) {

    return(
        <>
        <Button Button={isActive === 'FrontFeed'} onclick={()=>Onchange('FrontFeed')}>Главная</Button>
        <Button Button={isActive === 'feedBack'} onclick={()=>Onchange('feedBack')}>Обратная связь</Button>
        <Button Button={isActive === 'Effect'} onclick={()=>Onchange('Effect')}>Effect</Button>
        </>
    )
    
}