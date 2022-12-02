import React from 'react'
import Serial from '../../interfaces/Serial';
import User from '../../interfaces/User';
import { Filter } from './Filter';
import { SerialItem } from './SerialNode';
import '../../styles/MainPage/SerialsList.scss'
import axios from 'axios';

export const SerialsList: React.FC<{
    user: User | null,
    setSerials: any,
    setSerialsCopy: any,
    serials: Serial[], serialsCopy: Serial[], setSelectedSerial: any, setActiveCard: any, setCurrentUser: any, setSearchTerm: any, searchTerm: string
}>
    = ({ user, setSerials, setSerialsCopy, serialsCopy, setSelectedSerial, setActiveCard, setCurrentUser, setSearchTerm, searchTerm}) => {

        React.useEffect(() => {
            axios("https://api.tvmaze.com/shows").then((res) => {
                let test: Serial[] = res.data.map((serial: any) => {
                    let filteredSummary = serial.summary.replaceAll('<p>', '');
                    filteredSummary = filteredSummary.replaceAll('</p>', '');
                    filteredSummary = filteredSummary.replaceAll('<b>', '');
                    filteredSummary = filteredSummary.replaceAll('</b>', '');

                    return {
                        name: serial.name,
                        summary: filteredSummary,
                        image: serial.image.medium,
                        status: serial.status,
                        genres: serial.genres.join(', '),
                        rating: serial.rating.average,
                        premiered: serial.premiered,
                        bigImg: serial.image.original,
                    }
                })

                setSerials(test)
                setSerialsCopy(test)
            })
        }, [])

        return (
            <div className='SerialsList'>
                <Filter onChange={setSearchTerm} />
                {serialsCopy.map((serial, index) => (<SerialItem key={index + 1} user={user} serial={serial} setSelectedSerial={setSelectedSerial} setActiveCard={setActiveCard} setCurrentUser={setCurrentUser} />))}
            </div>
        )
    }