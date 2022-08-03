import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllHeroes } from '../../api/heroes'
import messages from '../shared/AutoDismissAlert/messages'


// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const HeroIndex = (props) => {
    const [heroes, setHeroes] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in HeroIndex', props)

    useEffect(() => {
        console.log(props)
        getAllHeroes()
            .then(res => setHeroes(res.data.heroes))
            .catch(err => {
                msgAlert({
                    heading: 'Heroes are delayed by battle, please wait...',
                    message: messages.getHeroesFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    })

    if (error) {
        return <p>Error!</p>
    }

    // If heroes haven't been loaded yet, show a loading message
    if (!heroes) {
        return <LoadingScreen />
    } else if (heroes.length === 0) {
        return <p>No heroes in Heavenhold.</p>
    }

    const heroCards = heroes.map(hero => (
        <Card style={{ width: '30%', margin: 5}} key={ hero.id }>
            <Card.Header>{ hero.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/heroes/${hero.id}`}>View { hero.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div style={ cardContainerStyle }>
            { heroCards }
        </div>
    )
}

export default HeroIndex