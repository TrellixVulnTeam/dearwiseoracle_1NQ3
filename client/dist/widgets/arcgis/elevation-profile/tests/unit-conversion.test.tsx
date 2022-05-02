import { convertSingle } from '../src/common/unit-conversion'

describe('Validate the distance and elevation values for ground elevation and profile line are converted according to', () => {
  it('The values and units from the elevation service should convert properly', function () {
    const convertMetersToKm = convertSingle(10, 'meters', 'kilometers')
    expect(convertMetersToKm).toEqual(0.01)

    const convertKmToMeters = convertSingle(10, 'kilometers', 'meters')
    expect(convertKmToMeters).toEqual(10000)

    const convertFeetToMiles = convertSingle(10, 'feet', 'miles')
    expect(convertFeetToMiles).toEqual(0.001893939393939394)

    const convertMilesToFeet = convertSingle(10, 'miles', 'feet')
    expect(convertMilesToFeet).toEqual(52799.99999999999)

    const convertKmToFeet = convertSingle(10, 'kilometers', 'feet')
    expect(convertKmToFeet).toEqual(32808.39895013123)

    const convertFeetToKm = convertSingle(10, 'feet', 'kilometers')
    expect(convertFeetToKm).toEqual(0.0030480000000000004)

    const convertYardsToMiles = convertSingle(10, 'yards', 'miles')
    expect(convertYardsToMiles).toEqual(0.005681818181818181)

    const convertMilesToYards = convertSingle(10, 'miles', 'yards')
    expect(convertMilesToYards).toEqual(17600)
  })
})
