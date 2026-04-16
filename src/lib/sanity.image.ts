import imageUrlBuilder, { createImageUrlBuilder } from '@sanity/image-url'
import { client } from '@/sanity/client' // Tu configuración del cliente de Sanity

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}