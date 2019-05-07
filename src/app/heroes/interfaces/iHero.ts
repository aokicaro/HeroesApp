import {Appearance} from './iAppearance';
import {Biography} from './iBiography';
import { Connections } from './iConnections';
import { Image } from './iImage';
import { PowerStats } from './iPowerStats';
import { Work } from './iWork';

export interface Hero{
    appearance: Appearance[]
    biography: Biography[]
    connections: Connections[]
    id: number
    image: Image[]
    name: string
    powerstats: PowerStats[]
    slug: string
    work: Work[]
}