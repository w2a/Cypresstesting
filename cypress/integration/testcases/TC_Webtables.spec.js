/// <reference types="cypress" />
describe('Verify Webtables',()=>{

    it('Webtables test cases',()=>{

        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')
      
        //total rows
        cy.get('table.dataTable > tbody > tr').should('have.length','30')
        

        //total cols
        cy.get('table.dataTable > tbody > tr:first-child td').should('have.length','6')

        //get single row data
        cy.get('table.dataTable > tbody > tr').eq(2).within(()=>{


            cy.get('td').then((element)=>{


                cy.log(element.text())

            })

            cy.get('td').eq(0).should('contain.text','Bajaj')

        })


        //validate data based on cell value

            cy.get('table.dataTable').contains('HDFC Bank Ltd.').parent().parent().within(()=>{

                cy.get('td').eq(2).then((element)=>{

                    cy.log("Current price is:"+element.text())

                })

            })

        //Get the entire table data


        cy.get('table.dataTable > tbody > tr').each((rows)=>{

            cy.wrap(rows).within(()=>{


                cy.get('td').each((data)=>{

                    cy.log(data.text())


                })

            })


        })

    })





})