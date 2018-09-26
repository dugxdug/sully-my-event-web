import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HttpHelperService {
  private options: { array: 'indexed' | 'simple' };

  buildParams(
    paramMap: { [key: string]: any },
    flattenOptions: { array: 'indexed' | 'simple' } = { array: 'simple' }
  ): HttpParams {
    this.options = flattenOptions;
    paramMap = this.flatten(paramMap);
    return Object.keys(paramMap).reduce((params, key) => (
      params.set(key, String(paramMap[key]))
    ), new HttpParams());
  }

  private flatten(paramMap: { [key: string]: any }): { [key: string]: any } {
    const result = {};
    this.buildKeyValuePairs(result, paramMap, '');
    return result;
  }

  private buildKeyValuePairs(destination: object, obj: object, prefix: string): void {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = obj[key];
      if (Array.isArray(value) && this.options.array === 'indexed') {
        // asp.net expects arrays to be ?value[0]=x&value[1]=y&value[2]=z
        for (let idx = 0; idx < value.length; idx++) {
          destination[`${prefix}${key}[${idx}]`] = value[idx];
        }
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        this.buildKeyValuePairs(destination, value, key + '.');
      } else {
        destination[prefix + key] = value;
      }
    }
  }
}
