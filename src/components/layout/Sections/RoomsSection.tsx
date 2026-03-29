"use client";
import React, { useState } from "react";
import { Section } from "../Section";
import Image from "next/image";
import { SimpleCTAButton } from "@/components/ui/CTAButton";
import { ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";

interface RoomsSectionProps {}

interface Room {
  id: number;
  src: string;
  number: string;
  suffix: string;
  title: string;
  description: string;
  people: number;
  fullDescription?: string;
  amenities?: string[];
  size?: string;
  bedType?: string;
  images?: string[];
}

const RoomsSection: React.FC<RoomsSectionProps> = ({}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rooms: Room[] = [
    {
      id: 0,
      src: "/habitaciondoble.png",
      number: "12.500",
      suffix: "$",
      title: "Habitación doble",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 2,
      fullDescription:
        "Habitación cómoda y luminosa con excelente vista al río. Ideal para parejas que buscan tranquilidad y confort.",
      amenities: [
        "Cama Queen Size",
        "Baño privado con ducha caliente",
        "Aire acondicionado",
        "Wi-Fi gratis",
        "Vista al río",
        "TV Smart",
      ],
      size: "28 m²",
      bedType: "Queen Size",
      images: [
        "/habitaciondoble.png",
        "/habitaciondoble2.jpg",
        "/habitaciondoble3.jpg",
      ],
    },
    {
      id: 1,
      src: "/habitacionfamiliar.png",
      number: "24.500",
      suffix: "$",
      title: "Habitación familiar",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 5,
      fullDescription:
        "Espaciosa y perfecta para familias. Cuenta con zona de estar y capacidad para hasta 5 personas.",
      amenities: [
        "Cama Queen + Literas",
        "Baño privado",
        "Aire acondicionado",
        "Wi-Fi",
        "Vista al río",
        "Zona de estar",
      ],
      size: "45 m²",
      bedType: "Queen + Literas",
      images: ["/habitacionfamiliar.png", "/habitacionfamiliar2.jpg"],
    },
    {
      id: 2,
      src: "/habitacionmatrimonial.png",
      number: "10.500",
      suffix: "$",
      title: "Habitación matrimonial",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 2,
      fullDescription:
        "Romántica y acogedora, ideal para parejas o luna de miel.",
      amenities: [
        "Cama Queen Size",
        "Baño en suite",
        "Aire acondicionado",
        "Wi-Fi",
        "Vista al río",
      ],
      size: "25 m²",
      bedType: "Queen Size",
      images: ["/habitacionmatrimonial.png"],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openImageModal = (room: Room, index: number = 0) => {
    if (room.images && room.images.length > 0) {
      setSelectedImage(room.images[index]);
      setCurrentImageIndex(index);
    } else {
      setSelectedImage(room.src);
      setCurrentImageIndex(0);
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const getActiveRoom = () => {
    return rooms.find(
      (r) =>
        r.images?.some((img) => img === selectedImage) ||
        r.src === selectedImage,
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const room = getActiveRoom();
    if (!room?.images || room.images.length <= 1) return;
    const nextIndex = (currentImageIndex + 1) % room.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(room.images[nextIndex]);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const room = getActiveRoom();
    if (!room?.images || room.images.length <= 1) return;
    const prevIndex =
      (currentImageIndex - 1 + room.images.length) % room.images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(room.images[prevIndex]);
  };

  return (
    <Section height="content" id="rooms" className="bg-background">
      <div className="w-full text-center items-center flex flex-col gap-12">
        <div className="flex flex-col w-full items-center justify-center text-center gap-5">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestras habitaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cabañas y habitaciones cómodas con vista al río, ideales para
            descansar en familia o pareja.
          </p>
        </div>

        {/* CONTENEDOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
          {rooms.map((room) => {
            const isExpanded = expandedId === room.id;
            const hasMultipleImages = (room.images?.length ?? 0) > 1;

            return (
              <div
                key={room.id}
                className="flex flex-col rounded-xl bg-card shadow-lg border border-border overflow-hidden transition-all duration-300"
              >
                {/* Imagen */}
                <div
                  className="relative w-full aspect-4/3 cursor-pointer group overflow-hidden"
                  onClick={() => openImageModal(room)}
                >
                  <Image
                    src={room.src}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      +{room.images!.length - 1} fotos
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="flex flex-col p-5 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl text-start font-bold tracking-tight">
                      {room.title}
                    </h3>
                    <p className="text-start text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {room.description}
                    </p>
                  </div>

                  <div className="flex w-full justify-between items-center py-2 border-y border-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-primary font-bold">
                        {room.suffix}
                        {room.number}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        /noche
                      </span>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full text-text-secondary">
                      {room.people} personas
                    </span>
                  </div>

                  {/* Botón Ver más */}
                  <button
                    onClick={() => toggleExpand(room.id)}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline transition-all py-1"
                  >
                    {isExpanded ? "Cerrar detalles" : "Ver detalles completos"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Sección expandible */}
                  {isExpanded && (
                    <div className="pt-4 space-y-4 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      {room.fullDescription && (
                        <p className="leading-relaxed text-muted-foreground text-start">
                          {room.fullDescription}
                        </p>
                      )}

                      <div className="grid grid-cols-2 gap-3 bg-muted/30 p-3 rounded-lg">
                        {room.size && (
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                              Tamaño
                            </span>
                            <span className="font-semibold">{room.size}</span>
                          </div>
                        )}
                        {room.bedType && (
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                              Camas
                            </span>
                            <span className="font-semibold">
                              {room.bedType}
                            </span>
                          </div>
                        )}
                      </div>

                      {room.amenities && (
                        <div className="text-start">
                          <p className="font-bold mb-2">Servicios incluidos:</p>
                          <ul className="grid grid-cols-2 gap-y-1.5 gap-x-2">
                            {room.amenities.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-muted-foreground text-xs"
                              >
                                <div className="w-1 h-1 rounded-full bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-2">
                        <SimpleCTAButton className="w-full" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal para ver imagen grande */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-100 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div className="relative group w-full flex justify-center items-center">
              {/* CAMBIO: Se utiliza la etiqueta Image de Next.js */}
              <div className="relative max-h-[80vh] w-full flex justify-center items-center overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Habitación ampliada"
                  width={1200} // Valor máximo de ancho deseado
                  height={900} // Valor máximo de alto deseado
                  className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                  priority={true} // Carga la imagen con prioridad
                />
              </div>

              {/* Controles de navegación */}
              {getActiveRoom()?.images &&
                getActiveRoom()!.images!.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      <ChevronLeft size={30} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      <ChevronRight size={30} />
                    </button>
                  </>
                )}
            </div>

            {/* Contador de fotos en el modal */}
            {getActiveRoom()?.images && (
              <p className="text-white/60 mt-4 text-sm font-medium">
                Imagen {currentImageIndex + 1} de{" "}
                {getActiveRoom()?.images?.length}
              </p>
            )}
          </div>
        </div>
      )}
    </Section>
  );
};

export default RoomsSection;
