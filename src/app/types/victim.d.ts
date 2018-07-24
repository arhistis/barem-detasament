import { Lesion } from './lesion.d';
export interface Victim {
    nume: String,
    varsta: Number,
    context: String,
    leziuni: {
        lesion: Lesion,
        location: String
    }[],
}