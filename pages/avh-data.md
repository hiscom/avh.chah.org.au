---
title: Data
layout: page_toc
permalink: "/data/"
excerpt: >-
  <p>The Australasian Virtual Herbarium (AVH) is the contribution of Australian and New Zealand herbaria to the Atlas of Living Australia (ALA). Currently, data is delivered to AVH by 14 Australian and nine New Zealand herbaria.</p>
---

The Australasian Virtual Herbarium (AVH) is the contribution of Australian and New Zealand herbaria to the Atlas of Living Australia (ALA). Currently, data is delivered to AVH by 14 Australian and nine New Zealand herbaria.

Herbarium specimen data is catalogued in accordance with the data entry standards and protocols of each herbarium. Once aggregated in the ALA BioCache, the data is standardised and a range of quality checks are applied to enhance data retrieval and analysis. The standardisation and data processing applied in the BioCache is described below. The unprocessed data provided by the herbaria is always available; an overview of the provided versus processed data is available for each record via the [Record detail](/using-avh/#Record_detail) page.

The AVH contains records of the holdings of Australian and New Zealand herbaria, including specimens collected outside those countries. It also contains records of cultivated plants and introduced occurrences and while we have the [Establishment means](#establishment_means) field to indicate whether a plant is cultivated or not native, this has not always been used. AVH records may also just be wrong. A record in the AVH of a species from a certain location only means that there is a specimen with this species name from the given location, not necessarily that the species with that name naturally occurs at that location. The major asset of the AVH is that all records are based on preserved specimens, so they can, to a large extent, be verified. It is up to the user to decide whether or not verification is warranted. By itself the AVH data is not more reliable than data you get from anywhere else.

{% include figure.html src="/media/data/avh_data_heatmap21-1024x683.jpg"
    caption="Collection density map showing world coverage of AVH records; grid cells are 3 × 3 square degrees and colours indicate number of collections per cell, ranging from yellow: 0–100 collections, to the brightest red: more than 500 collections. – From: Atlas of Living Australia Spatial Portal, &lt;<a href=\"https://spatial.ala.org.au\">https://spatial.ala.org.au</a>, accessed 18 April 2014." %}



## Specimen

### Herbarium

The name of the herbarium at which the specimen is held. The following herbaria currently contribute specimen data to the AVH:

AD – [State Herbarium of South Australia](http://collections.ala.org.au/public/show/co48)

AK – [Auckland War Memorial Museum Herbarium](http://collections.ala.org.au/public/show/co249)

BRI – [Queensland Herbarium](http://collections.ala.org.au/public/show/co49)

CANB – [Australian National Herbarium](http://collections.ala.org.au/public/show/co12)

CANU – [University of Canterbury Herbarium](http://collections.ala.org.au/public/show/co250)

CHR – [Allan Herbarium, Landcare Research NZ Ltd](http://collections.ala.org.au/public/show/co214)

CNS – [Australian Tropical Herbarium](http://collections.ala.org.au/public/show/co17)

DNA – [Northern Territory Herbarium](http://collections.ala.org.au/public/show/co25)

HO – [Tasmanian Herbarium](http://collections.ala.org.au/public/show/co60)

JCT – [James Cook University Herbarium](http://collections.ala.org.au/public/show/co31)

LINC – [Lincoln University Herbarium](http://collections.ala.org.au/public/show/co253)

LTB – [La Trobe University Herbarium](http://collections.ala.org.au/public/show/co33)

MEL – [National Herbarium of Victoria](http://collections.ala.org.au/public/show/co55)

MELU – [The University of Melbourne Herbarium](http://collections.ala.org.au/public/show/co64)

MPN – [Dame Ella Campbell Herbarium, Massey University](http://collections.ala.org.au/public/show/co254)

NE – [University of New England N.C.W. Beadle Herbarium](http://collections.ala.org.au/public/show/co65)

NSW – [National Herbarium of New South Wales](http://collections.ala.org.au/public/show/co54)

NZFRI – [National Forestry Herbarium NZ](http://collections.ala.org.au/public/show/co255)

PDD – [New Zealand Fungarium](http://collections.ala.org.au/public/show/co215)

PERTH – [Western Australian Herbarium](http://collections.ala.org.au/public/show/co75)

UNITEC – [Unitec Institute of Technology Herbarium](http://collections.ala.org.au/public/show/co218)

WELT – [Herbarium of the Museum of New Zealand – Te Papa Tongarewa](http://collections.ala.org.au/public/show/co216)

WOLL – [Janet Cosh Herbarium, University of Wollongong](http://collections.ala.org.au/public/show/co72)

### Herbarium code

The [Index Herbariorum](http://sweetgum.nybg.org/ih/) code of the herbarium at which the specimen is held.

### Catalogue number

The catalogue number is an identifier for the physical specimen. In the AVH, catalogue numbers consist of the Herbarium code, followed by a space and then the catalogue number used at the institution. The search for catalogue number uses an exact match, so the catalogue number entered needs to be exactly the same as it is in the AVH. Catalogue number formats applied at the different herbaria are listed in Table 1.

**Table 1.** Catalogue number formats used by the herbaria that contribute data to Australia’s Virtual Herbarium

{% include_relative tables/catalog-number-format-table.html %}

### ALA record ID

The record id is a unique identifier applied to the specimen record in the ALA BioCache. The ALA record ID is listed in the [CSV downloads](/using-avh#Download) and in the URL of the [Record detail](/using-avh#Record_detail) page. You can use the ALA record ID to find the most up-to-date data for the specimen record by typing ‘/\[record ID\]’ in the navigation bar of your browser.

### Basis of record

Basis of record describes the source of the information in a record. Occurrence records are generally either based on an object (such as a preserved specimen), or on an observation of an organism in the field. Object-based records are more verifiable than observation-based records, because the specimens are held in permanent collections and can be examined at a later date and the identification can be verified. All AVH records are based on objects.\
*Note that there are currently about 15,000 records from CANB and PERTH which are displayed with the record type ‘Human observation’, however, this is a data delivery error; all records in the AVH are specimen-based.*

### Preparations

The preparation type of the specimen (‘Sheet’, ‘Packet’ etc.).

### Date last updated

The date the record was last updated. On the [Record detail](/using-avh#Record_detail) pages this is shown as Date loaded and will appear under the location map. The Date last processed indicates when the record was last processed within the ALA BioCache. This may happen, for instance, when there is a change in the backbone taxonomy or the Sensitive Data Service, or when new environmental layers are loaded.

## Collecting event

### Collector

The name of the collector, as provided with the specimen record.

### Collecting number

The number (or other identifier) assigned to the specimen by the collector.

### Additional collectors

The names of any additional collectors who were present at the time the specimen was collected.

### Collecting date

The date that the specimen was collected. Collecting dates in the AVH are delivered in two ways: as Collecting date, which has to be ISO compliant, or as Verbatim collecting date. Some herbaria deliver Verbatim collecting date only when an ISO-compliant Collecting date can’t be delivered, or not all information can be delivered as an ISO-compliant date (e.g. ‘Summer of ’69’), while others deliver it for all collecting dates. Because of database restrictions, some herbaria are only able to deliver incomplete collecting dates as Verbatim collecting date. We hope to remedy this in the near future.

A small proportion of records in the AVH are undated. These will predominantly be historical (pre-1900) records, but will also include records collected in the twentieth century.

#### Querying by date

The Collecting date term in the [Advanced search](/using-avh#Advanced_search) form allows you to query for a range of collecting dates. If you enter just a start date or an end date, your results will include records of specimens collected since or up to that date respectively. To query for a particular collecting date, enter the same date in both fields. Because of problems associated with querying incomplete dates, the results for a search that includes a collecting date term will only return records with complete collecting dates.

#### Date facets

There are Year, Month and Decade facets on the [Results](/using-avh#Results) page that allow you to filter your results for records collected in a particular year, month or decade. Note that the Decade facet and chart only include records with complete collecting dates; records with only a month and a year, or just a year, will not be counted.

### Locality

The locality at which the specimen was collected.

### Habitat

A description of the habitat that the plant, alga or fungus was growing in, provided by the collector(s) of the specimen. Some herbarium databases have this information split into multiple fields, e.g. ‘Habitat’, ‘Associated taxa’, ‘Substrate’ and ‘Host’, but the information from the separate fields is concatenated before being delivered to the AVH.

### Collecting notes

Any additional notes about the specimen or the collecting event provided by the collector. Some herbaria store this information in multiple fields in their herbarium databases, for example ‘Collecting notes’ and ‘Descriptive notes’, but this information is concatenated for delivery to the AVH. Some herbarium databases have a general notes field and no other place to store notes from determiners or data entry personnel – and even those that do have dedicated fields for other types of notes have not always had them – so, for many records, Collecting notes will contain more than just collecting notes.

### Phenology

The Phenology field indicates whether the specimen is bearing flowers or fruits, etc.

### Establishment means

Establishment means describes how the specimen was established at the collecting locality. It combines the HISPID concepts ‘Cultivation status’ and ‘Natural occurrence’. Cultivation status can be one of the following values: ‘Cultivated’, ‘Not cultivated’, ‘Assumed to be cultivated’ and ‘Doubtfully cultivated’. Cultivation status is not recorded consistently among the different herbaria, and is not provided by all herbaria. Natural occurrence indicates whether the occurrence is natural or whether the specimen has been introduced at the collecting locality. Allowed values are: ‘Native’, ‘Assumed to be native’, ‘Doubtfully native’ and ‘Not native’. This information is recorded rather haphazardly.

### Conservation status

The conservation status associated with the taxon in the state or territory in which it was collected. The classification codes for each state or territory are listed in Table 2.

**Table 2**. Conservation status classification codes for Australian states and territories.

{% include_relative tables/state-conservation-status-table.html %}


## Taxonomy

### Taxon names in the AVH

The ALA applies taxon name resolution to incoming data. The taxon name with a record will be stored in the ALA BioCache exactly as it is delivered to the AVH – called ‘Taxon name (provided)’ in the AVH – but the taxon name will also be processed. The processing of the taxon name includes parsing the name into its parts, e.g. genus name and epithet(s). If the name can be parsed, the name resolver will try to match the canonical name against the ALA name list. If no match can be found or the name could not be parsed, it will try to match the genus name; if the genus name is not in the ALA name list, it will try to match the name of the family, which is provided separately.

If a matched name is in one of the authoritative national checklists that are part of the ALA name list, such as the [Australian Plant Census](https://biodiversity.org.au/nsl/services/APC) (APC), and if the matched name is considered a synonym, the processed name will be the accepted name from the checklist. The processed taxon name is called ‘Taxon name (processed)’ in the AVH.

The Identified to rank is the rank of the processed taxon name. This may be the same rank as the rank of the provided name, or a higher rank. If the rank of the processed name is different from that of the provided name, and the name resolver can work out the rank of the provided name, the rank of the provided name will be given on the [Record detail](/using-avh#Record_detail) page as well.

The Name match metric describes how the provided name was matched to a name in the ALA name list. If the parsed name was matched, the Name match metric will be ‘Canonical name match’. ‘Higher taxa match’ means that the name itself could not be matched, but the name of a higher taxon – genus or family – could. ‘No match’ means that neither the provided name nor the name of a higher taxon could be matched to a name in the ALA name list.

Author is the authorship of the processed name. The authorship of the provided name is given as part of Taxon name (provided).

The Common name (processed) is the common name recorded in the ALA name list. Common names are never provided by the herbaria.

### Classification

There are facets for taxonomic groups of all mandatory ranks (Kingdom, Phylum, Class, Order, Family, Genus, Species) and for Infraspecific taxon. These taxonomic groups are also given on the [Record detail](/using-avh#Record_detail) page and in the [downloads](/using-avh#Download). If there was no match for a provided name, the names of the taxonomic groups provided with the specimen record will be displayed.

### Botanical group

The Botanical group facet allows you to select records of a botanical group that is not necessarily a taxonomic group, for example, bryophytes, angiosperms or dicotyledons. Some other useful groupings, e.g. lichens, have not been implemented yet, but will be added when the National Species Lists have been completed. As these are not taxonomic groups, botanical groups may overlap and not all taxa are represented in one of the recognised groups.

### Identification qualifier

The Identification qualifier facet can be used to select records with certain determination qualifiers, or to exclude records with uncertain determination. Note that excluding records with uncertain determination disqualifies all records with determination qualifiers, no matter at what rank the qualifier applies. If a qualifier applies at the infraspecific rank you might want to include the determination in the results of a taxon name query. In this case you are better off keeping the uncertain determinations and deleting the ones that you don’t want from the output, or do a filter on uncertain determinations and see what you are going to throw out.

### Addendum

The taxon name addendum is a qualifier that comes after the taxon name. Name addenda endorsed by HISPID (translated in proper English) are ‘s. str.’ (in the narrow sense), ‘s.l.’ (in the broad sense) and ‘agg.’ (aggregate, group, complex). The first two are supposed to be used to differentiate between competing taxon concepts, but s.l. is often used to indicate uncertainty about whether the specimen belongs to the taxon in question, or if it belongs to a similar taxon. In this case, ‘agg.’ would have been more appropriate to use. Often aggregates are not formally recognised, although there is mostly general agreement on what the complexes are. For general use it is probably best to ignore ‘s. str.’ and treat determinations with the other name addenda as uncertain determinations.

### Identified by

The person or persons who last determined the specimen. Due to the practice at some Australian herbaria of changing the name on specimens as part of the curatorial process, without examining the specimen, a lot of this information is meaningless or even misleading.

### Identifier role

The role the determiner has played in the determination, e.g. determined the specimen (‘Det.’) or confirmed an earlier determination (‘Conf.’).

### Identified date

The Identified date term in the [Advanced search](/using-avh#Advanced_search) allows you to query for a range of determination dates. If you fill in just a start date or an end date, your results will include records of specimens determined since or up to that date respectively. In order to query for a particular determination date, enter the same date in both fields. Because of problems associated with querying incomplete dates, a result for a search that includes a determination date term will only include records with complete determination dates. It is common practice to give only a month and year on determination slips, so be aware that a large part of the determinations will be missed when querying by determination date.

### Determination notes

Determination notes are any notes that are made by the determiner at the time of the determination. These may include diagnostic features, a reference to the work that was used to identify the specimen, or an indication that the specimen is not typical for the taxon. Due to the structure of some herbarium databases, determination notes have often been included in Collecting notes.

### Specimen type (Type status)

The type status of any type specimens in the results. Note that, if you searched by a taxon name, a type specimen in the result is not necessarily a type of the name that you searched for.

## Geography

The values in many of the following geography fields have been inferred from the latitude and longitude provided with the specimen records. In some cases, the geography values stored in the herbarium record may differ from the inferred values due to geocoding errors. If you suspect that there is an error with a record, you can flag an issue on the [Record detail](/using-avh#Record_detail) page.

### Country

The country in which the specimen was collected. Note that, while most Australian and New Zealand herbaria hold specimens collected outside Australia and New Zealand, only a small proportion of foreign holdings have been databased and made available through the AVH.

### States (including coastal waters)

The state, territory or province that Australian specimens were collected in. Queries for records from countries other than Australia and New Zealand cannot be limited to political divisions below the country level.

### Local government area

The local government area in which the specimen was collected, based on the latitude and longitude provided with the specimen record.

### Latitude and longitude

The latitude and longitude of the collecting locality. If correctable errors are detected, for example the latitude or longitude is in the wrong hemisphere or the latitude and longitude are transposed, the values are corrected and the unprocessed latitude and longitude are given in the Latitude (provided) and Longitude (provided)fields in the [Record detail](/using-avh#Record_detail) page and in downloaded results.

### Geodetic datum

The geodetic datum is the reference from which the latitude and longitude are measured. The most common datums are WGS84, GDA94 and AGD66. While important for records of more recent collections, the inaccuracy of the georeferences in the bulk of the AVH records is much greater than the differences between the different datums. Geodetic datum is very haphazardly delivered with AVH data, even with georeferences that are accurate enough for the geodetic datum to be meaningful.

### Geocode uncertainty

The Geocode uncertainty is a measurement or estimate of how far away in metres the point represented by the latitude and longitude may be from the actual location where the specimen was collected. Most herbaria use ranges in their collections databases, for example 0-100 m, 100 m-1 km, 1-10 km, 10-25 km and &gt;25 km. The values that are delivered to the AVH are the maximum values of these ranges.

### Georeferencing method

The method by which the georeference was obtained, for example by GPS or by using a topographic map. In the HISPID standard, which is used for data delivery to the AVH, ‘Geocode source’ is a mixed concept and includes both generalisations for the method used and for the person who provided the georeference. In the AVH, the terms that refer to the person who provided the georeference are stored under Georeferenced by.

### Georeferenced by

A general term for the person who provided the georeference (‘Collector’ or ‘Compiler’).

### Altitude

The altitude in metres of the collecting locality, if provided with the specimen record. Altitude is presented in the AVH as Minimum altitude (m) and Maximum altitude (m). If a single value for altitude is provided, which will mostly be the case, this will be given as Minimum altitude (m). If a range is provided a Maximum altitude (m) will also be given.

### Depth

The depth in metres where the specimen was collected. Depth is presented in the AVH as Minimum depth (m)and Maximum depth (m). If a single value for depth is provided, which will mostly be the case, this will be given as Minimum depth (m). If a range is provided a Maximum depth (m) will also be given.

### IBRA 7 regions

The [Interim Biogeographic Regionalisation for Australia (IBRA) 7](http://www.environment.gov.au/land/nrs/science/ibra) region that corresponds to the latitude and longitude provided with the specimen record. (This data is only available for Australia.)

### IBRA 7 subregions

The [Interim Biogeographic Regionalisation for Australia (IBRA) 7](http://www.environment.gov.au/land/nrs/science/ibra) subregion that corresponds to the latitude and longitude provided with the specimen record. (This data is only available for Australia.)

### IMCRA 4 region

The [Integrated Marine and Coastal Regionalisation of Australia (IMCRA) 4](http://www.environment.gov.au/resource/guide-integrated-marine-and-coastal-regionalisation-australia-version-40-june-2006-imcra) bioregion that corresponds to the latitude and longitude provided with the specimen record. (This data is only available for Australia.)

### IMCRA Meso-scale bioregions

The [Integrated Marine and Coastal Regionalisation of Australia (IMCRA)](http://www.environment.gov.au/resource/guide-integrated-marine-and-coastal-regionalisation-australia-version-40-june-2006-imcra) meso-scale bioregion that corresponds to the latitude and longitude provided with the specimen record. (This data is only available for Australia.)

### NZ ecological districts

The [New Zealand ecological district](https://en.wikipedia.org/wiki/Ecological_districts_of_New_Zealand) that corresponds to the latitude and longitude provided with the specimen record.

### NZ land districts

The [New Zealand land district](https://teara.govt.nz/en/1966/geology-land-districts-of-new-zealand) that corresponds to the latitude and longitude provided with the specimen record.

### NZ provinces

The [New Zealand region](https://en.wikipedia.org/wiki/Regions_of_New_Zealand) that corresponds to the latitude and longitude provided with the specimen record.

### Biogeographic region

The combined IBRA and IMCRA biogeographic regions. This facet is hidden by default, but can be selected under the [Refine results](/using-avh#Refine_results) options. (This data is only available for Australia.)

### Ecoregion

The ecoregion (non-marine, marine, or limnetic) in which the taxon occurs. The data comes from the [Interim Register of Marine and Nonmarine Genera (IRMNG)](http://www.cmar.csiro.au/datacentre/irmng/) and is based on the genus name, not from the latitude and longitude associated with the record. Not all genus names in the AVH are in IRMNG. (This data is only available for Australia.)

### Vegetation type

The Major Vegetation Groups (from the [National Vegetation Information System](https://www.environment.gov.au/land/native-vegetation/national-vegetation-information-system)) at the collecting locality, inferred from the latitude and longitude provided with the specimen record. There are layers and facets for both the extant vegetation type (Vegetation types: extant) and the estimated vegetation before European settlement (Vegetation types: pre-1750). (This data is only available for Australia.)

### Commonwealth Electoral Boundaries

The Commonwealth electoral division that corresponds to the latitude and longitude provided with the specimen record (for Australian specimens).

### NRM regions

The Australian [Natural Resource Management (NRM) region](http://nrmregionsaustralia.com.au/) that corresponds to the latitude and longitude provided with the specimen record.

## Herbarium transactions

### Duplicates sent to

The herbaria to which duplicates have been sent. Herbaria are identified by their [Index Herbariorum](http://sweetgum.nybg.org/ih/) acronym. When querying this field, note that the specimen records in the results will be from the herbarium that sent the duplicates, not the herbaria that received the duplicates. A potential use case of the Duplicates sent to query term in the [Advanced search](/using-avh#Advanced_search) would be a herbarium trying to find the original records of specimens they have received on exchange from all other Australian herbaria, or, if used in combination with the Herbarium field, from one particular herbarium.

### Herbarium received from

The herbarium from which the specimen was received. In most cases, but not all, this will be the herbarium where the original specimen is held. Herbaria are identified by their [Index Herbariorum](http://sweetgum.nybg.org/ih/) acronym.

### Ex herb. catalogue number

The catalogue number for the original specimen at the herbarium from which a duplicate specimen was received.

### Loan number

The Loan number is the reference number or identifier assigned to the loan by the lending institution, and is used by the lender and the borrower for administrative purposes. Searching by loan number enables botanists who have borrowed from a herbarium that delivers loan data to the AVH (currently only AD and MEL) to retrieve the records for all specimens in a particular loan.

### Borrowing institution

The [Index Herbariorum](http://sweetgum.nybg.org/ih/) acronym of the borrowing institution.

## Data quality checks

### Data issues

When AVH data is uploaded into the BioCache, a range of quality assurance checks are performed and potential data issues are flagged. Some data issues (such as transposed or negated latitude and longitude) will result in the data being modified; other issues will simply be flagged. The details of any changes made during processing can be viewed by clicking on the [Original vs processed](/using-avh#Original_vs_processed) button on the [Record detail](/using-avh#Record_detail) page. Users can also flag potential issues with specimen records by using the [Flag an issue](/using-avh#Flag_an_issue) feature on the [Record detail](/using-avh#Record_detail) page. Data issues detected during processing or flagged by users are available as a facet on the [Results](/using-avh#Results) page, and can be used to narrow down your search results. The data issues are also available on the [Record detail](/using-avh#Record_detail) page and in the  [downloads](/using-avh#Downloads).

### Spatial validity

An assessment of whether or not the location is spatially valid, based on a range of data quality checks and user-contributed annotations. If the record suffers from one or more of the geospatial Data issues listed in Table 2 it is considered ‘Spatially suspect’, otherwise it is ‘Spatially valid’. Note that a ‘Spatially valid’ record is not necessarily correctly georeferenced, and, depending on the data issue, a ‘Spatially suspect’ record is not necessarily incorrectly georeferenced.

### Outliers

Outliers are observations that are distant from the rest of the data in a sample. In the AVH the sample is observations of a taxon. The presence of outliers might indicate that specimens (the outliers) have been incorrectly identified or georeferenced, but also that the distribution is skewed or disjunct, or that the taxon has been under-collected in certain areas. Checks for outliers in the AVH are done using five climate surfaces: precipitation seasonality, precipitation of the driest quarter, radiation seasonality, radiation of the warmest quarter and mean moisture index of the quarter with the highest moisture index. The tests are conducted only where there are 20 or more unique locations for a taxon. For more information on how the tests are done, see the notes on the [spatial outlier detection method](http://code.google.com/p/ala-dataquality/wiki/DETECTED_OUTLIER_JACKKNIFE) used by the ALA.

The Outlier for layer facet indicates if a specimen is an outlier for an environmental layer, based on the known environmental range of the taxon to which the specimen has been identified. The Outlier layer count facet allows you to filter your results for records that are outliers for certain numbers of environmental layers. You can also display your results by Outlier for layer or Outlier layer count on the distribution map. If a record is an outlier for one or more layers, the [Record detail](/using-avh#Record_detail) page will display graphs for each of the variables for which the record is an outlier with the distribution of the records of the taxon to which it belongs. The layers for which a record is an outlier will also be given in the  [downloads](/using-avh#Download).

## Sensitive data

Australia’s Virtual Herbarium contains data that may be considered sensitive because of conservation or biosecurity issues. The [ALA Sensitive Data Service](http://www.ala.org.au/faq/data-sensitivity/) contains authoritative lists of taxa that are considered sensitive, obtained in collaboration with Commonwealth, state and territory agencies and data providers, with information on how data of these taxa should be handled for each state. Distribution data for these sensitive taxa may be either withheld or generalised. The latter means that instead of a detailed locality the local government area will be given and that the latitude and longitude will be rounded to, for example, a single decimal place. Currently, distribution data is only completely withheld for a single native species, the Wollemi Pine (*Wollemia nobilis*). There is a Sensitive data facet that can be used to check for sensitive data among query results. The [Record detail](/using-avh#Record_detail) page and the  [downloads](/using-avh#Download) indicate whether distribution data has been withheld or generalised for each record.

## Multimedia

The Multimedia facet allows you to filter your results for records that have images or other multimedia attached.