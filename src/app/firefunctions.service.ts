import { Injectable, inject } from '@angular/core';
import { Observable, defer, from, map } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Functions, HttpsCallableResult, httpsCallable } from '@angular/fire/functions';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirefunctionsService {
  private functions: Functions = inject(Functions);
  private firestore: Firestore = inject(Firestore);

  constructor(private func: AngularFireFunctions) {

    //let value ={ coolMsg: "hola MUNDO" };
    //this.fnMyUppercase2(value).subscribe(console.dir);
    //this.fnMyUppercase(value).subscribe(console.dir);
  }

  getPlaylists(): Observable<any> {
    const aCollection = collection(this.firestore, 'playlists')
    return collectionData(aCollection);
  }

  fnMyUppercase2(value: any): Observable<HttpsCallableResult> {
    return defer(() => from(httpsCallable<HttpsCallableResult>(this.functions, 'upper')(value)))
    .pipe(
      map((response: any) => response.data)
    );
  }

  fnMyUppercase(value: any): Observable<HttpsCallableResult> {
    return this.func.httpsCallable<HttpsCallableResult>('upper')(value);
  }
}
