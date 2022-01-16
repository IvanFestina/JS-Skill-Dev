import React, {useState} from "react";
import styled from "styled-components";


type SelectPropsType = {
    items: string[]
    title: string
}

const Main = styled("div")`
  font-family: sans-serif;
  height: 100vh;
`

const DropDownContainer = styled('div')`
  width: 11em;
  margin: 0 auto;
`

const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  &:hover {
    background: aliceblue;
  }
`
const DropDownListContainer = styled('div')``
const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;

  &:first-child {
    padding-top: 0.8em;
  }
`
const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    background: aliceblue;
  }
`

export function SelectStyled(props: SelectPropsType) {



    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('')

    const togglingHandler = () => setIsOpen(!isOpen)
    const onOptionClicked = (item: string) => {
        setSelectedOption(item)
        setIsOpen(false)
        console.log(selectedOption)
    }

    return (
        <Main>
            <p>{props.title}</p>
            <DropDownContainer>
                <DropDownHeader onClick={togglingHandler}>{selectedOption || 'Pick yours'}</DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {props.items.map((item, index) => (
                            <ListItem key={index} onClick={() => onOptionClicked(item)}>{item}</ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    )
}


//
// <div>
//             <div>{props.items.find()}</div>
//             {props.items.map(i => <div>{i.title})}
//         </div>