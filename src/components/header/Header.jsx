import "./header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBagShopping,
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons"
import { Col, Container, Row } from "react-bootstrap"
import { DateRange } from "react-date-range"
import { useState } from "react"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { newSearch } from "../../redux/Search/SearchSlice"

const Header = ({ type }) => {
  const dispatch = useDispatch()
  const [openDate, setOpenDate] = useState(false)
  const [destination, setDestination] = useState("")
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setoptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  const handleOption = (name, operation) => {
    setoptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    dispatch(newSearch({ destination, dates, options }))
    navigate("/hotels", { state: { destination, dates, options } })
  }
  return (
    <div className="header">
      <Container
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBagShopping} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="headerDescription">
              Get rewarded for your travels - Unlock instant savings of 10%or
              more with a free Booking App account
            </p>
            {!user && (
              <button className="headerButton">Login / Register</button>
            )}

            <Container className="headerSearch">
              <Row className="headerSearchRow">
                <Col md="3" sm="12" className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Col>
                <Col md="4" sm="12" className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )} `}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </Col>
                <Col md="4" sm="12" className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.adult} adult --- ${options.children} children --- ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "decrease")}
                            disabled={options.adult <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "increase")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "decrease")}
                            disabled={options.children <= 0}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "increase")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "decrease")}
                            disabled={options.room <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "increase")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Col>
                <Col md="1" sm="12" className="headerSearchItem hbtn">
                  <button
                    className="headerButton"
                    onClick={handleSearch}
                    disabled={!destination}
                  >
                    Search
                  </button>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </div>
  )
}

export default Header
