import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  @ViewChild('map') mapView: ElementRef;

  /**
   * Constructor
   */
  constructor() {}
  
  /**
   * Ion did enter
   */
  ionViewDidEnter() {
    this.createMap();
  }

  /**
   * Creates the map
   */
  createMap() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    console.error('mapv0', this.mapView);
    

   CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5
    });

   CapacitorGoogleMaps.addListener('onMapReady', async () => {
      CapacitorGoogleMaps.setMapType({
        type: "normal" // hybrid, satellite, terrain
      });

     //this.showCurrentPosition();
    });
  }
}
