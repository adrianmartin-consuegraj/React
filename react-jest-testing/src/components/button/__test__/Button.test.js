import ReactDOM from 'react-dom'
import Button from '../Button'
// import { render } from '@testing-library/react'
import { cleanUp } from '@testing-library/react'
import "jest-dom/extend-expect"
import renderer from 'react-test-render'

// write down in the Terminal 'npm test' to execute the test

afterEach(cleanUp)
it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Button></Button>, div)
})

/*
it("renders button correctly", () =>{
    const {getByTestId} = render(<Button label="click me please" />)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})
*/

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})