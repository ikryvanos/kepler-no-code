import {keplerGlComponentId} from "../../constant";
import {useKeplerAppState} from "../../effects/useKeplerAppState";
import KeplerGlSchema from "kepler.gl/schemas";
import {StyledModalContent} from "kepler.gl/components";
import React from "react";
import {useOriginalHtmlTagState} from "../../effects/useOriginalHtmlTagState";

function encodHtml(str: string){
  const htmlEntities = [
    {regex:/&/g,entity:'&amp;'},
    {regex:/>/g,entity:'&gt;'},
    {regex:/</g,entity:'&lt;'},
    {regex:/"/g,entity:'&quot;'},
    {regex:/á/g,entity:'&aacute;'},
    {regex:/é/g,entity:'&eacute;'},
    {regex:/í/g,entity:'&iacute;'},
    {regex:/ó/g,entity:'&oacute;'},
    {regex:/ú/g,entity:'&uacute;'}
  ];


  for(const v in htmlEntities){
    str = str.replace(htmlEntities[v].regex, htmlEntities[v].entity);
  }

  return str;
}

export const HtmlTagExportDialogContent = () => {
  const keplerAppState = useKeplerAppState(keplerGlComponentId);
  const originalHtmlTag = useOriginalHtmlTagState();
  // TODO: add preloader
  const preloader = <div>Loading...</div>

  let modalContent = preloader;
  if (keplerAppState && originalHtmlTag) {
    const configToSave = KeplerGlSchema.getConfigToSave(keplerAppState);

    const htmlTag = (`<${originalHtmlTag.meta.tag}
    data-widget-type="kepler.gl"
    data-mapbox-token="${originalHtmlTag.meta.mapboxToken}"
    data-width="${originalHtmlTag.meta.width}"
    data-height="${originalHtmlTag.meta.height}"
    data-vis-state="${encodHtml(JSON.stringify(configToSave.config.visState))}"
    data-map-state="${encodHtml(JSON.stringify(configToSave.config.mapState))}"
    data-map-style="${encodHtml(JSON.stringify(configToSave.config.mapStyle))}"
    onLoad="${originalHtmlTag.meta.onload}"
/>`);
    modalContent= <code style={{whiteSpace: 'pre'}}>
      {htmlTag}
    </code>;
  }
  return <StyledModalContent>
    {modalContent}
  </StyledModalContent>
}
